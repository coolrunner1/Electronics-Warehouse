import {OrderHistoryItem} from "./OrderHistoryItem.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

export const OrderReturnHistoryItem = (props) => {
    const [date, setDate] = useState(new Date(props.item.return_date).toLocaleDateString("en-GB"));
    return (
        <>
            <tr>
                <td>
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
                </td>
                <td>${props.item.unit_price}</td>
                <td>{props.item.quantity}</td>
                <td>${(props.item.unit_price * props.item.quantity).toFixed(2)}</td>
                <td>{props.item.status}</td>
                <td>{props.item.reason}</td>
                <td>{props.item.description}</td>
                <td>{date}</td>
            </tr>
        </>
    )
}

OrderReturnHistoryItem.propTypes = {
    item: PropTypes.object,
}