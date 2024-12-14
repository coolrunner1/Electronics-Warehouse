import PropTypes from "prop-types";
import {OrderReturnHistoryItem} from "./OrderReturnHistoryItem.jsx";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn.jsx";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {useEffect, useState} from "react";

export const OrderReturnsHistoryTable = (props) => {
    const itemReturn = useSelector((state) => state.returns.itemReturn);
    const [orderId, setOrderId] = useState(0);

    useEffect(() => {
        if (props.items.length > 0) {
            setOrderId(props.items[0].order_id)
            console.log(props.items[0])
        }
    }, [props.items]);

    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {['Name', 'Price per unit', 'Quantity', 'Total price', 'Reason', 'Description', 'Date', 'Status']
                        .map((item, index) => (
                            <Th key={index} scope="col" className="text-left p-3 px-4">{item}</Th>
                        ))}
                    {props.userRole !== 2 &&
                        <Th scope="col" className="text-left p-3 px-4">New status</Th>
                    }
                    <Th scope="col"></Th>
                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item, index) => (
                    <OrderReturnHistoryItem key={index} item={item} userRole={props.userRole}
                                            returnStatuses={props.returnStatuses}/>
                ))}
                {(itemReturn !== null && props.userRole === 2 && props.items && itemReturn.order_id === orderId) && (
                    <NewOrderReturn/>
                )}
                </Tbody>
            </Table>
        </>
    )
}

OrderReturnsHistoryTable.propTypes = {
    items: PropTypes.array,
    userRole: PropTypes.number,
    returnStatuses: PropTypes.array,
}