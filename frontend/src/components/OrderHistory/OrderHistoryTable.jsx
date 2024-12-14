import {OrderHistoryItem} from "./OrderHistoryItem.jsx";
import PropTypes from "prop-types";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";

export const OrderHistoryTable = (props) => {
    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {["Product", "Manufacturer", "Price per unit", "Quantity", "Total price"].map((item, index) => (
                        <Th key={index} scope="col" className="text-left p-3 px-4">{item}</Th>
                    ))}
                    {(props.status === 'Delivered' && props.userRole === 2) && (
                        <Th scope="col" className="text-left p-3 px-4">Return</Th>
                    )
                    }

                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item, index) => (
                    <OrderHistoryItem key={index} item={item} status={props.status} userRole={props.userRole} />
                ))}
                </Tbody>
            </Table>
        </>
    )
}

OrderHistoryTable.propTypes = {
    items: PropTypes.array,
    status: PropTypes.string,
    userRole: PropTypes.number,
}