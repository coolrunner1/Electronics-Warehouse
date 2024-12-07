import {UserEntry} from "../Admin/UserEntry.jsx";
import {AccountButton} from "../Header/AccountButton.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {UsersTableHeader} from "../Admin/UsersTableHeader.jsx";

export const AdminDashboardPage = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users/")
            .then((response) => setUsers(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setUsers([]);
            });
        axios.get("http://localhost:8000/roles/")
            .then((response) => setRoles(response.data.rows.map((role) => ({value: role.role_id, label: role.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setRoles([]);
            });
    }, []);

    return (
        <>
            <div>
                <div className="p-4 flex justify-between">
                    <h1 className="text-3xl">
                        Users
                    </h1>
                    <AccountButton/>
                </div>
                <div className="px-3 py-4 flex justify-center overflow-x-auto">
                    {users.length === 0
                        ? <div className="text-center text-xl">No users found.</div>
                        :
                        <table className="w-full text-md shadow-md rounded mb-4">
                            <tbody>
                            <tr className="border-b">
                                {
                                    ['Login', 'Password', 'Full Name', 'Email', 'Phone number', 'Passport', 'Role', 'Company']
                                        .map((item, index) => (<UsersTableHeader name={item} key={index}/>))
                                }
                                <th>
                                    <button type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">New
                                    </button>
                                </th>
                            </tr>
                            {users.map((user) => (
                                <UserEntry user={user} key={user.user_id} roles={roles}/>
                            ))}
                            </tbody>
                        </table>
                    }

                </div>
            </div>
        </>
    )
}