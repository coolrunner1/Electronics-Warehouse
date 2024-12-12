import {OrderHistoryTable} from "./OrderHistoryTable.jsx";
import * as DataTypes from "prop-types";
import {useEffect, useState} from "react";
import axios from "axios";
import {OrderReturnsHistoryTable} from "./OrderReturnsHistoryTable.jsx";
import {useSelector} from "react-redux";

export const OrderHistoryEntry = (props) => {
    const [date, setDate] = useState("");
    const [items, setItems] = useState([]);
    const [orderReturns, setOrderReturns] = useState([]);
    const itemReturn = useSelector((state) => state.returns.itemReturn);

    useEffect(() => {
        const dateString = props.order.timestamp;
        setDate(new Date(dateString).toLocaleDateString("en-GB") + " " + new Date(dateString).toLocaleTimeString("en-GB"));
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
                            <div className="text-center">Status: {props.order.status}</div>
                        </dl>
                        <OrderHistoryTable items={items} status={props.order.status} />
                        {props.order.status === 'Delivered' && (
                            <div>
                                <div className="text-center">Returns</div>
                                {orderReturns.length === 0 && itemReturn === null
                                    ? <div className="mt-3 text-center">No returns yet</div>
                                    : <OrderReturnsHistoryTable items={orderReturns} status={props.order.status} />
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
}