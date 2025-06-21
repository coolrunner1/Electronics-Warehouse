import {OrderReturnHistoryTableItem} from "./OrderReturnHistoryTableItem.tsx";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {useEffect, useState} from "react";
import {RootState} from "../../state/store";
import {ItemInReturn} from "../../types/Item";
import {ValueLabel} from "../../types/ValueLabel";
import {useTranslation} from "react-i18next";

export type OrderReturnHistoryTableItemProps = {
    items: ItemInReturn[],
    userRole: number,
    returnStatuses?: ValueLabel<string>[],
    orderId: number,
}

export const OrderReturnsHistoryTable = (
    props: OrderReturnHistoryTableItemProps
) => {
    const itemReturn = useSelector((state: RootState): ItemInReturn | null => state.returns.itemReturn);
    const [orderId, setOrderId] = useState(0);
    const {t} = useTranslation();

    useEffect(() => {
        if (itemReturn) {
            setOrderId(itemReturn.order_id);
        }
    }, [props.items]);

    return (
        <div className="max-w-screen overflow-x-scroll">
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead className="border-b">
                <Tr>
                    {[t('product'), t('price-per-unit'), t('quantity'), t('total-price'), t('description'), t('date'), t('reason'), t('status')]
                        .map((item, index) => (
                            <Th key={index} className="text-left p-3 px-4">{item}</Th>
                        ))}
                    {props.userRole !== 2 &&
                        <Th className="text-left p-3 px-4">{t('new-status')}</Th>
                    }
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                {props.items.map((item: ItemInReturn, index: number) => (
                    <OrderReturnHistoryTableItem
                        key={index}
                        item={item}
                        userRole={props.userRole}
                        returnStatuses={props.returnStatuses}/>
                ))}
                {(itemReturn !== null && props.userRole === 2 && props.items && props.orderId === orderId) && (
                    <NewOrderReturn/>
                )}
                </Tbody>
            </Table>
        </div>
    )
}