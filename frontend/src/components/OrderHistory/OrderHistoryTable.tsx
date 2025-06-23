import {OrderHistoryTableItem} from "./OrderHistoryTableItem.tsx";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {ItemInOrder} from "../../types/Item";
import {useTranslation} from "react-i18next";
import {USER_ROLE} from "../../constants/roles.ts";

export type OrderHistoryTableProps = {
    items: ItemInOrder[],
    status: string,
    userRole: number,
}

export const OrderHistoryTable = (
    props: OrderHistoryTableProps
) => {
    const {t} = useTranslation();

    return (
        <div className="max-w-screen overflow-x-scroll">
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {[t('product'), t("manufacturer"), t('price-per-unit'), t('quantity'), t('total-price')].map((item, index) => (
                        <Th key={index} className="text-left p-3 px-4">{item}</Th>
                    ))}
                    {(props.status === 'Delivered' && props.userRole === USER_ROLE) && (
                        <Th className="text-left p-3 px-4">{t('return')}</Th>
                    )
                    }

                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item: ItemInOrder, index: number) => (
                    <OrderHistoryTableItem key={index} item={item} status={props.status} userRole={props.userRole} />
                ))}
                </Tbody>
            </Table>
        </div>
    )
}