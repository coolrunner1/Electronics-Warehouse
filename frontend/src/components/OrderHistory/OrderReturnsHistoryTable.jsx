import PropTypes from "prop-types";
import {OrderReturnHistoryItem} from "./OrderReturnHistoryItem.jsx";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn.jsx";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";

export const OrderReturnsHistoryTable = (props) => {
    const itemReturn = useSelector((state) => state.returns.itemReturn)

    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {['Name', 'Price per unit', 'Quantity', 'Total price', 'Status', 'Reason', 'Description', 'Date', '']
                        .map((item, index) => (
                            <Th key={index} scope="col" className="text-left p-3 px-4">{item}</Th>
                        ))}
                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item, index) => (
                    <OrderReturnHistoryItem key={index} item={item}/>
                ))}
                {itemReturn !== null && (
                    <NewOrderReturn/>
                )}
                </Tbody>
            </Table>
        </>
    )
}

OrderReturnsHistoryTable.propTypes = {
    items: PropTypes.array,
}