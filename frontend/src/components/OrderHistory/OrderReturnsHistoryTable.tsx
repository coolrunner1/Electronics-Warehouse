import {OrderReturnHistoryItem} from "./OrderReturnHistoryItem";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {useEffect, useState} from "react";
import {RootState} from "../../state/store";
import {Item} from "../../types/Item";
import {ValueLabel} from "../../types/ValueLabel";

export const OrderReturnsHistoryTable = (
    props: {
        items: Item[],
        userRole: number,
        returnStatuses: ValueLabel[],
        orderId: number,
    }
) => {
    const itemReturn = useSelector((state: RootState) => state.returns.itemReturn);
    const [orderId, setOrderId] = useState(0);

    useEffect(() => {
        if (itemReturn) {
            setOrderId(itemReturn.order_id);
        }
    }, [props.items]);

    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {['Name', 'Price per unit', 'Quantity', 'Total price', 'Reason', 'Description', 'Date', 'Status']
                        .map((item, index) => (
                            <Th key={index} className="text-left p-3 px-4">{item}</Th>
                        ))}
                    {props.userRole !== 2 &&
                        <Th className="text-left p-3 px-4">New status</Th>
                    }
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item: Item, index: number) => (
                    <OrderReturnHistoryItem key={index} item={item} userRole={props.userRole}
                                            returnStatuses={props.returnStatuses}/>
                ))}
                {(itemReturn !== null && props.userRole === 2 && props.items && props.orderId === orderId) && (
                    <NewOrderReturn/>
                )}
                </Tbody>
            </Table>
        </>
    )
}