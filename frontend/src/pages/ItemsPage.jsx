import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setUserRefresh} from "../slices/usersSlice.js";
import {AccountButton} from "../components/Global/AccountButton.jsx";
import {TableHeader} from "../components/Global/TableHeader.jsx";
import {BlueButton} from "../components/Global/BlueButton.jsx";
import {UserEntry} from "../components/Admin/UserEntry.jsx";
import {ItemsEntry} from "../components/Items/ItemsEntry.jsx";

export const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [roles, setRoles] = useState([]);
    const [clients, setClients] = useState([]);
    const userRefresh = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/items/")
            .then((response) => setItems(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setItems([]);
            });
        console.log(items)
        /*dispatch(setUserRefresh(false));
        axios.get("http://localhost:8000/roles/")
            .then((response) => setRoles(response.data.rows.map((role) => ({value: role.role_id, label: role.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setRoles([]);
            });
        axios.get("http://localhost:8000/clients/")
            .then((response) => setClients(response.data.rows.map((client) => ({value: client.client_id, label: client.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setClients([]);
            });*/
    }, [userRefresh]);

    const onNewClick = () => {
        setItems([...items, {
            user_id: 99999,
            role_id: 1,
            client_id: 1,
            login: 'login',
            password: 'password',
            image_path: null,
            full_name: 'full name',
            email: 'email@example.com',
            phone_number: 777777777,
            passport: 0,
        }]);
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    Items
                </h1>
                <div className="px-4 py-4 flex justify-center overflow-x-auto ">
                    {items.length === 0
                        ? <div className="text-center text-xl">No items found.</div>
                        :
                        <table className="w-full text-md shadow-md rounded mb-4">
                            <tbody>
                            <tr className="border-b">
                                {
                                    ['Model', 'Image', 'Manufacturer', 'Category', 'Price', 'Status', 'Units in stock', 'Faulty units']
                                        .map((item, index) => (<TableHeader name={item} key={index}/>))
                                }
                                <th>
                                    <BlueButton onButtonClick={onNewClick} name={"New"}/>
                                </th>
                            </tr>
                            {items.map((user) => (
                                <ItemsEntry user={user} key={user.user_id} roles={roles} clients={clients} />
                            ))}
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </>
    )
}