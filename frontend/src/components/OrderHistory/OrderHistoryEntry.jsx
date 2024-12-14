import {OrderHistoryTable} from "./OrderHistoryTable.jsx";
import * as DataTypes from "prop-types";
import {useEffect, useState} from "react";
import axios from "axios";
import {OrderReturnsHistoryTable} from "./OrderReturnsHistoryTable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {dateToString} from "../../utils/dateToString.js";
import PropTypes from "prop-types";
import {OrderClientInfo} from "./OrderClientInfo.jsx";
import Select from "react-select";
import {customStyles} from "../../utils/customStyles.js";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";

export const OrderHistoryEntry = (props) => {
    const [date, setDate] = useState("");
    const [items, setItems] = useState([]);
    const [orderReturns, setOrderReturns] = useState([]);
    const [status, setStatus] = useState("");
    const [currentStatus, setCurrentStatus] = useState("");
    const itemReturn = useSelector((state) => state.returns.itemReturn);

    useEffect(() => {
        const dateString = props.order.timestamp;
        setDate(dateToString(dateString));
        setCurrentStatus(props.order.status);
        axios.get("http://localhost:8000/orders/"+props.order.order_id+"/items")
            .then((response) => setItems(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setItems([]);
            });
        if (props.order.status === 'Delivered') {
            axios.get("http://localhost:8000/orders/"+props.order.order_id+"/returns")
                .then((response) => setOrderReturns(response.data.rows))
                .catch((error) => {
                    console.error('Error fetching items:', error);
                    setOrderReturns([]);
                });
        }
    }, [itemReturn]);

    const onStatusChange = (e) => {
        setStatus(e.label);
    }

    const onSetClick = async () => {
        await axios.patch("http://localhost:8000/orders/"+props.order.order_id, { status: status })
            .then((response) => console.log(response))
            .catch((error) => {
                console.error('Error updating order:', error);
            })
        await setCurrentStatus(status);
    }

    const onCancelClick = async () => {
        await axios.patch("http://localhost:8000/orders/"+props.order.order_id, { status: "Canceled" })
            .then((response) => console.log(response))
            .catch((error) => {
                console.error('Error updating order:', error);
            })
        await setCurrentStatus("Canceled");
    }

    return (
        <>
            <section>
                <div
                    className="px-4 py-4 sm:m-6 flex flex-col justify-center overflow-x-auto font-bold text-xl text-center">
                    <div className="justify-between sm:mb-6 rounded-lg sm:p-6 shadow-md ">
                        <dl className="flex flex-col gap-4 justify-center text-center">
                            <h3 className="i">Order placed on {date}
                            </h3>
                            <div className="text-center">Order number: {props.order.order_id}</div>
                            <div className="text-center">Number of items: {props.order.total_items}</div>
                            <div className="text-center">Total amount: ${props.order.total_amount}</div>
                            <div className="text-center">Status: {currentStatus}</div>
                            {(props.userRole === 3 && currentStatus !== "Delivered" && currentStatus !== "Canceled") &&
                                <div className="text-center flex align-center justify-center gap-4">New status:
                                    <Select
                                        options={props.orderStatuses}
                                        onChange={onStatusChange}
                                        styles={customStyles}
                                        maxMenuHeight={250}
                                    />
                                    <BlueButton name={"Set"} onClick={onSetClick} />
                                </div>
                            }

                            {props.userRole === 3 &&
                                <OrderClientInfo clientId={props.order.client_id}/>
                            }

                            {(props.userRole === 2 && currentStatus !== "Canceled" && currentStatus !== "Delivered") &&
                                <div className={"max-w-44 m-auto"}>
                                    <RedButton name={"Cancel"} onClick={onCancelClick}/>
                                </div>

                            }
                            <div className="p-4"></div>
                        </dl>
                        <OrderHistoryTable items={items} status={props.order.status} userRole={props.userRole}/>
                        {props.order.status === 'Delivered' && (
                            <div>
                                <div className="text-center">Returns</div>
                                {orderReturns.length === 0 && itemReturn === null
                                    ? <div className="mt-3 text-center">No returns yet</div>
                                    : <OrderReturnsHistoryTable items={orderReturns} status={props.order.status}
                                                                userRole={props.userRole} returnStatuses={props.returnStatuses}/>
                                }

                            </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

OrderHistoryEntry.propTypes = {
    order: DataTypes.object,
    userRole: PropTypes.number,
    orderStatuses: PropTypes.array,
    returnStatuses: PropTypes.array,
}