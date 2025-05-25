import {OrderHistoryTableItem} from "./OrderHistoryTableItem.tsx";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {Item} from "../../types/Item";
import {useTranslation} from "react-i18next";

export const OrderHistoryTable = (
    props: {
        items: Item[],
        status: string,
        userRole: number,
    }
) => {
    const {t} = useTranslation();

    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {[t('product'), t("manufacturer"), t('price-per-unit'), t('quantity'), t('total-price')].map((item, index) => (
                        <Th key={index} className="text-left p-3 px-4">{item}</Th>
                    ))}
                    {(props.status === 'Delivered' && props.userRole === 2) && (
                        <Th className="text-left p-3 px-4">{t('return')}</Th>
                    )
                    }

                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item: Item, index: number) => (
                    <OrderHistoryTableItem key={index} item={item} status={props.status} userRole={props.userRole} />
                ))}
                </Tbody>
            </Table>
        </>
    )
}