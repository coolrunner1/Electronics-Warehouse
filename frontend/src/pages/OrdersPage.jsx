import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {OrderHistoryEntry} from "../components/OrderHistory/OrderHistoryEntry.jsx";
import {useLocation} from "react-router-dom";

export const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

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
    }, [])

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
                <h1 className="mb-10 text-center text-2xl font-bold">Orders</h1>
                {orders.length === 0
                    ? <div className="text-center text-xl">No orders found.</div>
                    : orders.map((order) => (<OrderHistoryEntry key={order.order_id} order={order} />))
                }

            </div>
        </>
    )
}