import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice.ts";
import {OrganizationsTable} from "../../components/Organizations/OrganizationsTable.tsx";
import {RootState} from "../../state/store.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchClients} from "../../api/clients.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {queryClient} from "../../api/queryClient.ts";
import {useTranslation} from "react-i18next";
import {AxiosError} from "axios";
import {useLocation} from "react-router-dom";

export const ClientsPage = () => {
    const tableRefresh = useSelector((state: RootState) => state.table.tableRefresh);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const location = useLocation();
    const {t} = useTranslation();

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?") {
            setSearch('');
            return;
        }
        setSearch(location.search.slice(1));
    }, [location]);

    const {
        data,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryFn: fetchClients,
        queryKey: ['clients', page, itemsPerPage, search],

    });

    useEffect(() => {
        if (!data) return;
        if (data?.pagination < page && !data?.clients.length) {
            setPage(1);
            return;
        }
    }, [data]);

    useEffect(() => {
        queryClient.removeQueries({queryKey: ['clients', page, itemsPerPage]});
        refetch()
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    return (
        <div>
            <h1 className="text-3xl text-center p-4">{t('clients')}</h1>
            <div className="sm:px-4 py-4 flex flex-col items-center">
                {isLoading &&
                    <LoadingIndicator/>
                }
                {!data && error && (error as AxiosError).status === 404 &&
                    <>
                        <div className="text-center text-xl">{t('no-clients')}</div>
                        <OrganizationsTable organizations={[]} organizations_type="clients" />
                    </>
                }
                {error &&
                    <div className="text-center text-xl">{error.message}</div>
                }
                {!isLoading && !isError &&
                    <>
                        {data && data.clients.length > 0 ?
                            <>
                                <div className="w-full max-w-screen overflow-x-scroll">
                                    <OrganizationsTable organizations={data.clients} organizations_type="clients" />
                                </div>
                                <Pagination
                                    currentPage={page}
                                    setCurrentPage={setPage}
                                    pageCount={data.pagination}
                                    itemsPerPage={itemsPerPage}
                                    setItemsPerPage={setItemsPerPage}
                                />
                            </> :
                            <>
                                <div className="text-center text-xl">{t('no-clients')}</div>
                                {!search && <OrganizationsTable organizations={[]} organizations_type="clients" />}
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}