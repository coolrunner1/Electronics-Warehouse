import {OrderHistoryEntry} from "../components/OrderHistory/OrderHistoryEntry.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const OrderUserHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/orders/client/1")
            .then((response) => setOrders(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setOrders([]);
            });
    }, [])
    return (
        <>
            <div className="flex flex-col px-4 py-4">
                <h1 className="mb-10 text-center text-2xl font-bold">Order history</h1>
                {orders.length === 0
                    ? <div className="text-center text-xl">No orders yet.</div>
                    : orders.map((order) => (<OrderHistoryEntry key={order.order_id} order={order} />))
                }

            </div>
        </>
    )
}