import {OrderHistoryEntry} from "../../components/OrderHistory/OrderHistoryEntry.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import { Order } from "../../types/Order.ts";
import {useTranslation} from "react-i18next";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {User} from "../../types/User.ts";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export const OrderUserHistory = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const {t} = useTranslation();

    const user = useAuthUser<User>();
    const isAuthenticated = useIsAuthenticated()

    useEffect(() => {
        if (!user) return;
        axios.get("http://localhost:8000/orders/client/"+user.client_id)
            .then((response) => setOrders(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setOrders([]);
            });
    }, [user])
    return (
        <div className="flex flex-col px-4 py-4">
            <h1 className="mb-10 text-center text-2xl font-bold">{t('order-history')}</h1>
            {isAuthenticated && user && (
                <>
                    {orders.length === 0
                        ? <div className="text-center text-xl">{t('no-orders')}</div>
                        : orders.map((order) => (<OrderHistoryEntry key={order.order_id} order={order} userRole={user.role_id} />))
                    }
                </>
            )}
            {!isAuthenticated &&
                <div className="text-center text-2xl">{t('only-for-authed-users')}</div>
            }
        </div>
    )
}