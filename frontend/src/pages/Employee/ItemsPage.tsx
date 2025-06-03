import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ItemsEntry} from "../../components/Items/ItemsEntry.tsx";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {setTableRefresh} from "../../slices/tableSlice.ts";
import {NewRemoveButtons} from "../../components/Global/NewRemoveButtons.tsx";
import {RootState} from "../../state/store.ts";
import {ItemInShop} from "../../types/Item.ts";
import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";
import {useGetMappedCategories} from "../../hooks/useGetMappedCategories.ts";
import {fetchItems} from "../../api/items.ts";
import {useGetMappedSuppliers} from "../../hooks/useGetMappedSuppliers.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {AxiosError} from "axios";
import {Pagination} from "../../components/Pagination/Pagination.tsx";

export const ItemsPage = () => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [items, setItems] = useState<ItemInShop[]>([
        {
            item_id: 99999,
            modelEN: '',
            modelRU: '',
            manufacturer: '',
            category_id: 1,
            unit_price: 0.0,
            date_of_arrival: "",
            units_in_stock: 0,
            faulty_units: 0
        }
    ]);
    const tableRefresh = useSelector((state: RootState) => state.table.tableRefresh);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const {categories} = useGetMappedCategories();
    const {
        data,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['items', page, itemsPerPage, '', 'lastArrival', 'desc'],
        queryFn: fetchItems,
    });

    const {suppliers} = useGetMappedSuppliers();

    useEffect(() => {
        //queryClient.removeQueries({queryKey: ['items']});
        refetch();
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    useEffect(() => {
        if (!data?.items) return;
        setItems(data.items);
    }, [data?.items]);

    const onNewClick = () => {
        if (items[0].item_id === 99999) {
            setItems(items.splice(1))
            return;
        }

        if (!data || !data.items) {
            setItems([{
                item_id: 99999,
                modelEN: '',
                modelRU: '',
                manufacturer: '',
                category_id: 1,
                unit_price: 0.0,
                date_of_arrival: "",
                units_in_stock: 0,
                faulty_units: 0
            }]);
            return;
        }

        setItems([{
            item_id: 99999,
            modelEN: '',
            modelRU: '',
            manufacturer: '',
            category_id: 1,
            unit_price: 0.0,
            date_of_arrival: "",
            units_in_stock: 0,
            faulty_units: 0
        }, ...data.items]);
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    {t('items')}
                </h1>
                <div className="px-4 py-4 flex flex-col overflow-auto items-center">
                    {isLoading &&
                        <LoadingIndicator/>
                    }
                    {!data && error && (error as AxiosError).status === 404 &&
                        <>
                            <div className="text-center text-xl">{t('no-items')}</div>
                        </>
                    }
                    {error && (error as AxiosError).status !== 404 &&
                        <div className="text-center text-xl">{error.message}</div>
                    }
                    {!isLoading && !isError &&
                        <>
                            {data &&
                                <>
                                    <Table className="bg-light-default dark:bg-dark-default w-full text-md shadow-md rounded mb-4">
                                        <Thead>
                                            <Tr className="border-b">
                                                {
                                                    [t('model-en'), t('model-ru'), t('manufacturer'), t('category'), t('price'), t('units-in-stock'), t('faulty-units'), t('last-arrival')]
                                                        .map((item, index) => (<Th key={index}>{item}</Th>))
                                                }
                                                <Th>
                                                    <NewRemoveButtons id={items[0].item_id} onNewClick={onNewClick} />
                                                </Th>
                                                <Th></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {categories && items.map((item) => (
                                                <ItemsEntry
                                                    item={item}
                                                    categories={categories}
                                                    suppliers={suppliers}
                                                    key={item.item_id}/>
                                            ))}
                                        </Tbody>
                                    </Table>
                                    <Pagination
                                        currentPage={page}
                                        setCurrentPage={setPage}
                                        pageCount={data.pagination}
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