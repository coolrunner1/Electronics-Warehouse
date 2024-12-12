import PropTypes from "prop-types";
import {OrderReturnHistoryItem} from "./OrderReturnHistoryItem.jsx";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn.jsx";

export const OrderReturnsHistoryTable = (props) => {
    const itemReturn = useSelector((state) => state.returns.itemReturn)

    return (
        <>
            <table className="w-full text-md shadow-md rounded mb-4">
                <thead className="border-b">
                <tr>
                    {['Name', 'Price per unit', 'Quantity', 'Total price', 'Status', 'Reason', 'Description', 'Date', '']
                        .map((item, index) => (
                            <th key={index} scope="col" className="text-left p-3 px-4">{item}</th>
                        ))}
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <OrderReturnHistoryItem key={index} item={item}/>
                ))}
                {itemReturn !== null && (
                    <NewOrderReturn/>
                )}
                </tbody>
            </table>
        </>
    )
}

OrderReturnsHistoryTable.propTypes = {
    items: PropTypes.array,
}