import {OrderHistoryItem} from "./OrderHistoryItem";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {Item} from "../../types/Item";

export const OrderHistoryTable = (
    props: {
        items: Item[],
        status: string,
        userRole: number,
    }
) => {
    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {["Product", "Manufacturer", "Price per unit", "Quantity", "Total price"].map((item, index) => (
                        <Th key={index} className="text-left p-3 px-4">{item}</Th>
                    ))}
                    {(props.status === 'Delivered' && props.userRole === 2) && (
                        <Th className="text-left p-3 px-4">Return</Th>
                    )
                    }

                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item: Item, index: number) => (
                    <OrderHistoryItem key={index} item={item} status={props.status} userRole={props.userRole} />
                ))}
                </Tbody>
            </Table>
        </>
    )
}