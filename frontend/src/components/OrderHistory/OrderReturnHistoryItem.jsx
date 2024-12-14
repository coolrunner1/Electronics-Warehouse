import PropTypes from "prop-types";
import {useState} from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";
import Select from "react-select";
import {BlueButton} from "../Global/BlueButton.jsx";
import {customStyles} from "../../utils/customStyles.js";
import axios from "axios";

export const OrderReturnHistoryItem = (props) => {
    const [date, setDate] = useState(new Date(props.item.return_date).toLocaleDateString("en-GB"));
    const [status, setStatus] = useState("");
    const [currentStatus, setCurrentStatus] = useState(props.item.status);

    const onStatusChange = (e) => {
        setStatus(e.label);
    }

    const onSetClick = async () => {
        await axios.patch("http://localhost:8000/orders/returns/"+props.item.order_return_id, { status: status })
            .then((response) => console.log(response))
            .catch((error) => {
                console.error('Error updating order:', error);
            })
        await setCurrentStatus(status);
    }

    return (
        <>
            <Tr>
                <Td>
                    <div className="flex justify-center m-3">
                        {props.item.image_path === null
                            ? (<img
                                alt={props.item.model.toLowerCase()}
                                src="/placeholder.png"
                                className="w-full rounded-lg sm:w-40"/>)
                            : (<img
                                alt={props.item.model.toLowerCase()}
                                src={props.item.image_path}
                                className="w-full rounded-lg sm:w-40"/>)
                        }

                    </div>
                    <div>{props.item.model}</div>
                </Td>
                {['$'+props.item.unit_price, props.item.quantity, '$'+(props.item.unit_price * props.item.quantity).toFixed(2),
                    props.item.reason, props.item.description, date, currentStatus]
                    .map((item, index) => (
                        <Td className="p-3" key={index}>{item}</Td>
                    ))}
                <Td className="p-3">
                    {(props.userRole !== 2 && currentStatus !== "Refunded" && currentStatus !== "Rejected") &&
                        <div className="flex justify-center m-auto gap-3">
                            <Select
                                options={props.returnStatuses}
                                onChange={onStatusChange}
                                styles={customStyles}
                                maxMenuHeight={250}
                            />
                            <BlueButton name={'Set'} onClick={onSetClick}/>
                        </div>
                    }
                </Td>
            </Tr>
        </>
    )
}

OrderReturnHistoryItem.propTypes = {
    item: PropTypes.object,
    userRole: PropTypes.number,
    returnStatuses: PropTypes.array,
}