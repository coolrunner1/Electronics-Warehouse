import {ShopItem} from "./ShopItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import {AxiosError} from "axios";
import {RootState} from "../../state/store";
import {ItemInShop} from "../../types/Item.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchItems} from "../../api/items.ts";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useTranslation} from "react-i18next";
import { LoadingIndicator } from "../Global/LoadingIndicator.tsx";


export const ItemsContainer = () => {
    const {category, manufacturer, sortBy, sortingDirection} = useSelector((state: RootState) => state.filters);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    const {i18n, t} = useTranslation();

    const location = useLocation();

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
        error
    } = useQuery({
        queryFn: fetchItems,
        queryKey: ['items', page, itemsPerPage, search, sortBy+(i18n.language).toUpperCase(), sortingDirection, category, manufacturer],
    })

    return (
        <>
            <section className="light:bg-gray-200">
                {isError &&
                    <>
                        {(error as AxiosError).status === 404 ?
                            <div className="text-center text-xl">{t('no-items')}</div> :
                            <div className="text-center text-xl">{error.message}</div>
                        }
                    </>
                }
                {isLoading &&
                    <LoadingIndicator/>
                }
                {!isLoading && !isError &&
                    <>
                        {data &&
                            <>
                                {data.items.length
                                    ?
                                    <>
                                        <div
                                            className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                            {data.items.map((item: ItemInShop) =>
                                                <ShopItem key={item.item_id} item={item} />
                                            )
                                            }

                                        </div>
                                        <div className="flex justify-center">
                                            <Pagination
                                                currentPage={page}
                                                setCurrentPage={setPage}
                                                pageCount={data.pagination}
                                                itemsPerPage={itemsPerPage}
                                                setItemsPerPage={setItemsPerPage}
                                            />
                                        </div>
                                    </>
                                    :
                                    <div className="text-center text-xl">{t('no-items-found')}</div>
                                }

                            </>
                        }
                    </>
                }
            </section>

        </>
)
}