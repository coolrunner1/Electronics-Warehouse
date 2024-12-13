import PropTypes from "prop-types";
import {useState} from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";

export const OrderReturnHistoryItem = (props) => {
    const [date, setDate] = useState(new Date(props.item.return_date).toLocaleDateString("en-GB"));
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
                    props.item.status, props.item.reason, props.item.description, date]
                    .map((item, index) => (
                        <Td className="p-3" key={index}>{item}</Td>
                    ))}
            </Tr>
        </>
    )
}

OrderReturnHistoryItem.propTypes = {
    item: PropTypes.object,
}