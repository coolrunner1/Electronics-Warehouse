import {useEffect, useState} from "react";
import axios from "axios";
import {OrderHistoryEntry} from "../../components/OrderHistory/OrderHistoryEntry.tsx";
import {useLocation} from "react-router-dom";
import {Order} from "../../types/Order.ts";
import {useTranslation} from "react-i18next";
import {useGetMappedEnums} from "../../hooks/useGetMappedEnums.ts";
import {getOrderStatuses, getReturnStatuses} from "../../api/enums.ts";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {User} from "../../types/User.ts";
import {EMPLOYEE_ROLE} from "../../constants/roles.ts";

export const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const {i18n, t} = useTranslation();

    const userRole = useAuthUser<User>()?.role_id;

    const location = useLocation();

    const getAllOrders = () => {
        axios.get("http://localhost:8000/orders")
            .then((response) => setOrders(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setOrders([]);
            });
    }

    const {mappedEnum: returnStatuses} = useGetMappedEnums(getReturnStatuses, ['return-statuses']);
    const {mappedEnum: orderStatuses} = useGetMappedEnums(getOrderStatuses, ['order-statuses']);

    useEffect(() => {
        console.log(returnStatuses);
    }, [returnStatuses]);

    useEffect(() => {
        console.log(orderStatuses);
    }, [orderStatuses]);

    useEffect(() => {
        getAllOrders();
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
            {userRole === EMPLOYEE_ROLE &&
                <div className="flex flex-col sm:px-4 py-4">
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
            }
        </>
    )
}