import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTableRefresh} from "../slices/tableSlice";
import {OrganizationsTable} from "../components/Organizations/OrganizationsTable";
import {RootState} from "../state/store";
import {useQuery} from "@tanstack/react-query";
import {fetchClients} from "../api/clients";
import {LoadingIndicator} from "../components/Global/LoadingIndicator";
import {Pagination} from "../components/Pagination/Pagination.tsx";
import {queryClient} from "../api/queryClient.ts";
import {useTranslation} from "react-i18next";

export const ClientsPage = () => {
    const tableRefresh = useSelector((state: RootState) => state.table.tableRefresh);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {t} = useTranslation();

    const {
        data,
        isLoading,
        refetch
    } = useQuery({
        queryFn: fetchClients,
        queryKey: ['clients', page]
    });

    useEffect(() => {
        queryClient.removeQueries({queryKey: ['clients', page]});
        refetch()
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    return (
        <div>
            <h1 className="text-3xl text-center p-4">{t('clients')}</h1>
            <div className="px-4 py-4 flex flex-col overflow-auto items-center">
                {isLoading &&
                    <LoadingIndicator/>
                }
                {!isLoading &&
                    data
                        ? <OrganizationsTable organizations={data.clients} organizations_type="clients" />
                        : <div className="text-center text-xl">{t('no-clients')}</div>
                }
                {data &&
                    <Pagination
                        currentPage={page}
                        setCurrentPage={setPage}
                        pageCount={data.pagination}
                    />}
            </div>
        </div>
    )
}