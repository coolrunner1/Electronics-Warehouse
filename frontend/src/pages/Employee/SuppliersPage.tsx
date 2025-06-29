import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice.ts";
import {OrganizationsTable} from "../../components/Organizations/OrganizationsTable.tsx";
import {RootState} from "../../state/store.ts";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../../api/queryClient.ts";
import {fetchSuppliers} from "../../api/suppliers.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

export const SuppliersPage = () => {
    const tableRefresh = useSelector((state: RootState) => state.table.tableRefresh);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const location = useLocation();
    const [search, setSearch] = useState("");
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
        queryFn: fetchSuppliers,
        queryKey: ['suppliers', page, itemsPerPage, search],
    });

    useEffect(() => {
        if (!data) return;
        if (data?.pagination < page && !data?.suppliers.length) {
            setPage(1);
            return;
        }
    }, [data]);

    useEffect(() => {
        queryClient.removeQueries({queryKey: ['suppliers', page]});
        refetch()
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    return (
        <div>
            <h1 className="text-3xl text-center p-4">{t('suppliers')}</h1>
            <div className="sm:px-4 py-4 flex flex-col overflow-auto items-center">
                {isLoading &&
                    <LoadingIndicator/>
                }
                {error &&
                    <div className="text-center text-xl">{error.message}</div>
                }
                {!isLoading && !isError &&
                    <>
                        {data && data.suppliers.length > 0 ?
                            <>
                                <div className="w-full max-w-screen overflow-x-scroll">
                                    <OrganizationsTable organizations={data.suppliers} organizations_type="suppliers" />
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
                                <div className="text-center text-xl">{t('no-suppliers')}</div>
                                {!search && <OrganizationsTable organizations={[]} organizations_type="suppliers" />}
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}