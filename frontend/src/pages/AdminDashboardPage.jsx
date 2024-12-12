import {UserEntry} from "../components/Admin/UserEntry.jsx";
import {AccountButton} from "../components/Global/AccountButton.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {TableHeader} from "../components/Global/TableHeader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserRefresh} from "../slices/usersSlice.js";
import {BlueButton} from "../components/Global/BlueButton.jsx";

export const AdminDashboardPage = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [clients, setClients] = useState([]);
    const userRefresh = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/users/")
            .then((response) => setUsers(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setUsers([]);
            });
        dispatch(setUserRefresh(false));
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
            });
    }, [userRefresh]);

    const onNewClick = () => {
        setUsers([...users, {
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
                <div className="p-4 flex justify-between">
                    <h1 className="text-3xl">
                        Users
                    </h1>
                    <AccountButton/>
                </div>
                <div className="px-4 py-4 flex justify-center overflow-x-auto ">
                    {users.length === 0
                        ? <div className="text-center text-xl">No users found.</div>
                        :
                        <table className="w-full text-md shadow-md rounded mb-4">
                            <tbody>
                            <tr className="border-b">
                                {
                                    ['Login', 'Password', 'Full Name', 'Email', 'Phone number', 'Passport', 'Role', 'Company']
                                        .map((item, index) => (<TableHeader name={item} key={index}/>))
                                }
                                <th>
                                    <BlueButton onButtonClick={onNewClick} name={"New"}/>
                                </th>
                            </tr>
                            {users.map((user) => (
                                <UserEntry user={user} key={user.user_id} roles={roles} clients={clients} />
                            ))}
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </>
    )
}