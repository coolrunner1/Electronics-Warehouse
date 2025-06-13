import {UserEntry} from "../../components/Admin/UserEntry.tsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice.ts";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {NewRemoveButtons} from "../../components/Global/NewRemoveButtons.tsx";
import {RootState} from "../../state/store.ts";
import {User} from "../../types/User.ts";
import {useTranslation} from "react-i18next";
import {fetchUsers} from "../../api/users.ts";
import {useQuery} from "@tanstack/react-query";
import {useGetMappedClients} from "../../hooks/useGetMappedClients.ts";
import {useGetMappedRoles} from "../../hooks/useGetMappedRoles.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {AxiosError} from "axios";
import {Pagination} from "../../components/Pagination/Pagination.tsx";

export const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const tableRefresh = useSelector((state: RootState) => state.table);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const {
        data,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryFn: fetchUsers,
        queryKey: ['users', page, itemsPerPage]
    })

    const {clients} = useGetMappedClients();
    const {roles} = useGetMappedRoles();

    useEffect(() => {
        setUsers(data?.users);
    }, [data])

    useEffect(() => {
        refetch();
        dispatch(setTableRefresh(false));
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
            phone_number: '+7777777777',
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
                <div className="flex flex-col items-center justify-center px-4 py-4 overflow-auto">
                    {isLoading &&
                        <LoadingIndicator/>
                    }
                    {error && (error as AxiosError).status !== 404 &&
                        <div className="text-center text-xl">{error.message}</div>
                    }
                    {!isLoading && !isError &&
                        <>
                            {users && users.length &&
                                <>
                                    <Table className="bg-light-default dark:bg-dark-default w-full text-md shadow-md rounded mb-4" role="table">
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
                                    <Pagination
                                        currentPage={page}
                                        setCurrentPage={setPage}
                                        pageCount={data?.pagination}
                                        itemsPerPage={itemsPerPage}
                                        setItemsPerPage={setItemsPerPage}
                                    />
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}