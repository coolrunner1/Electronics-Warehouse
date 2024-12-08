import {OrderHistoryItem} from "./OrderHistoryItem.jsx";
import PropTypes from "prop-types";

export const OrderHistoryTable = (props) => {
    return (
        <>
            <table className="w-full text-md shadow-md rounded mb-4">
                <thead className="border-b">
                <tr>
                    <th scope="col" className="text-left p-3 px-4">Product</th>
                    <th scope="col" className="text-left p-3 px-4">Manufacturer</th>
                    <th scope="col" className="text-left p-3 px-4">Price per unit</th>
                    <th scope="col" className="text-left p-3 px-4">Quantity</th>
                    <th scope="col" className="text-left p-3 px-4">Total price</th>
                    {props.status === 'Delivered' && (
                        <th scope="col" className="text-left p-3 px-4">Return</th>
                    )
                    }

                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <OrderHistoryItem key={index} item={item} status={props.status} />
                ))}
                </tbody>
            </table>
        </>
    )
}

OrderHistoryTable.propTypes = {
    items: PropTypes.array,
    status: PropTypes.string,
}