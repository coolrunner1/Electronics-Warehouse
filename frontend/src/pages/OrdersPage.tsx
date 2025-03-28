import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {OrderHistoryEntry} from "../components/OrderHistory/OrderHistoryEntry";
import {useLocation} from "react-router-dom";
import {RootState} from "../state/store";
import {EnumFromDB} from "../types/EnumFromDB";

export const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [orderStatuses, setOrderStatuses] = useState([]);
    const [returnStatuses, setReturnStatuses] = useState([]);
    const userRole = useSelector((state: RootState) => state.user.userInfo.role_id);

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
                .map((item: EnumFromDB, index: number) => ({value: index+1, label: item.unnest}))))
            .catch((error) => {
            console.error('Error fetching items:', error);
            });
        axios.get("http://localhost:8000/enums/returnstatuses")
            .then((response) => setReturnStatuses(response.data.rows
                .map((item: EnumFromDB, index: number) => ({value: index+1, label: item.unnest}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
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