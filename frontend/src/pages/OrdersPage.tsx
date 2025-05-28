import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {OrderHistoryEntry} from "../components/OrderHistory/OrderHistoryEntry";
import {useLocation} from "react-router-dom";
import {RootState} from "../state/store";
import {EnumFromDB} from "../types/EnumFromDB";
import {Order} from "../types/Order.ts";
import {useTranslation} from "react-i18next";

export const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [orderStatuses, setOrderStatuses] = useState([]);
    const [returnStatuses, setReturnStatuses] = useState([]);
    const userRole = useSelector((state: RootState) => state.user.userInfo.role_id);
    const {i18n, t} = useTranslation();

    const location = useLocation();

    const getAllOrders = () => {
        axios.get("http://localhost:8000/orders")
            .then((response) => setOrders(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setOrders([]);
            });
    }

    useEffect(() => {
        getAllOrders();
        axios.get("http://localhost:8000/enums/orderstatuses")
            .then((response) => setOrderStatuses(response.data.rows
                .map((item: EnumFromDB) => ({value: item.unnest, label: t(item.unnest)}))))
            .catch((error) => {
            console.error('Error fetching items:', error);
            });
        axios.get("http://localhost:8000/enums/returnstatuses")
            .then((response) => setReturnStatuses(response.data.rows
                .map((item: EnumFromDB) => ({value: item.unnest, label: t(item.unnest)}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
    }, [i18n.language])

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?") {
            getAllOrders();
        } else {
            axios.get("http://localhost:8000/orders/search/"+location.search.slice(1))
                .then((response) => setOrders(response.data.rows))
                .catch((error) => {
                    console.error('Error fetching items:', error);
                    setOrders([]);
                });
        }
    }, [location]);

    return (
        <>
            <div className="flex flex-col px-4 py-4">
                <h1 className="text-3xl text-center p-4">{t('orders')}</h1>
                {orders.length === 0
                    ? <div className="text-center text-xl">{t('no-orders')}</div>
                    : orders.map((order) => (
                        <OrderHistoryEntry
                            key={order.order_id}
                            order={order}
                            userRole={userRole}
                            orderStatuses={orderStatuses}
                            returnStatuses={returnStatuses}
                        />
                    ))
                }

            </div>
        </>
    )
}