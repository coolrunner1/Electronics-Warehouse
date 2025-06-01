import {UserEntry} from "../components/Admin/UserEntry";
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setTableRefresh} from "../slices/tableSlice";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {NewRemoveButtons} from "../components/Global/NewRemoveButtons";
import {RootState} from "../state/store";
import {Role} from "../types/Role";
import {User} from "../types/User.ts";
import {Client} from "../types/Client.ts";
import {useTranslation} from "react-i18next";

export const AdminDashboardPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState([]);
    const [clients, setClients] = useState([]);
    const tableRefresh = useSelector((state: RootState) => state.table);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        axios.get("http://localhost:8000/users")
            .then((response) => setUsers(response.data.rows))
            .catch((error) => {
                console.error('Error fetching users:', error);
                setUsers([]);
            });
        dispatch(setTableRefresh(false));
        axios.get("http://localhost:8000/roles")
            .then((response) => setRoles(response.data.rows.map((role: Role) => ({value: role.role_id, label: role.name}))))
            .catch((error) => {
                console.error('Error fetching roles:', error);
                setRoles([]);
            });
        axios.get("http://localhost:8000/api/v1/clients?limit=none")
            .then((response) => setClients(response.data.data.map((client: Client) => ({value: client.client_id, label: client.name}))))
            .catch((error) => {
                console.error('Error fetching clients:', error);
                setClients([]);
            });
    }, [tableRefresh]);

    const onNewClick = () => {
        if (users[0].user_id === 99999) {
            setUsers(users.splice(1));
            return;
        }
        setUsers([{
            user_id: 99999,
            role_id: 1,
            client_id: null,
            login: 'login',
            password: 'password',
            image_path: null,
            full_name: 'full name',
            email: 'email@example.com',
            phone_number: 777777777,
            passport: 0,
        }, ...users]);
    }

    return (
        <>
            <div>
                <div className="text-center">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                        {t('users')}
                    </h6>
                </div>
                <div className="px-4 py-4 overflow-auto">
                    {users.length === 0
                        ? <div className="text-center text-xl">No users found.</div>
                        :
                        <Table className="w-full text-md shadow-md rounded mb-4" role="table">
                            <Thead>
                                <Tr className="border-b">
                                    {
                                        [t('login'), t('new-password'), t('full-name'), 'Email', t('phone-number'), t('passport'), t('role'), t('company')]
                                            .map((item, index) => (<Th key={index} role="columnheader">{item}</Th>))
                                    }
                                    <Th>
                                        <NewRemoveButtons id={users[0].user_id} onNewClick={onNewClick}/>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.map((user) => (
                                    <UserEntry user={user} key={user.user_id} roles={roles} clients={clients}/>
                                ))}
                            </Tbody>
                        </Table>
                    }

                </div>
            </div>
        </>
    )
}