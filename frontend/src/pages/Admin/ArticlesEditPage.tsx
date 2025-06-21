import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setTableRefresh} from '../../slices/tableSlice.ts'
import {NewRemoveButtons} from '../../components/Global/NewRemoveButtons.tsx'
import {RootState} from '../../state/store.ts'
import {useTranslation} from 'react-i18next'
import {useQuery} from '@tanstack/react-query'
import {ArticleEditEntry} from '../../components/Articles/ArticleEditEntry.tsx'
import {Pagination} from '../../components/Pagination/Pagination.tsx'
import {LoadingIndicator} from '../../components/Global/LoadingIndicator.tsx'
import {fetchArticles} from '../../api/articles.ts'
import {Article} from '../../types/Article.ts'
import {useLocation} from 'react-router-dom'
import {NEW_ENTRY} from "../../constants/newEntry.ts";

export const ArticlesEditPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const [search, setSearch] = useState('');
    const tableRefresh = useSelector((state: RootState) => state.table);
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const location = useLocation();

    const {data, isLoading, isError, error, refetch} = useQuery({
        queryFn: fetchArticles,
        queryKey: ['articles', page, itemsPerPage, search],
    });

    useEffect(() => {
        if (!data) return;
        if (data?.pagination < page && !data?.articles.length) {
            setPage(1);
            return;
        }
        if (!data?.articles.length && !search) {
            setArticles([
                {
                    id: NEW_ENTRY,
                    titleEN: 'test',
                    titleRU: '',
                    descriptionEN: '',
                    descriptionRU: '',
                    contentEN: '',
                    contentRU: '',
                    createdAt: '',
                },
            ]);
            return;
        }
        setArticles(data?.articles);
    }, [data]);

    useEffect(() => {
        refetch();
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?") {
            setSearch('');
            return;
        }
        setSearch(location.search.slice(1));
    }, [location]);

    const onNewClick = () => {
        if (articles[0].id === NEW_ENTRY) {
            setArticles(articles.splice(1));
            return;
        }

        setArticles([
            {
                id: NEW_ENTRY,
                titleEN: '',
                titleRU: '',
                descriptionEN: '',
                descriptionRU: '',
                contentEN: '',
                contentRU: '',
                createdAt: '',
            },
            ...articles
        ]);
    }

    return (
        <>
            <div>
                <div className='text-center'>
                    <h6 className='text-blueGray-700 text-xl font-bold'>{t('news')}</h6>
                </div>
                <div className='flex flex-col items-center justify-center px-4 py-4 overflow-auto'>
                    {isLoading && <LoadingIndicator/>}
                    {error && (
                        <div className='text-center text-xl'>{error.message}</div>
                    )}
                    {!isLoading && !isError &&
                        <>
                        {!articles?.length &&
                            <div className="text-center text-xl">{t('no-articles')}</div>
                        }
                        {data && articles && articles.length &&
                            <>
                                <NewRemoveButtons
                                    id={articles[0].id}
                                    onNewClick={onNewClick}
                                />
                                <div className="flex flex-col gap-2 mt-2">
                                    {articles.map((article) => (
                                        <ArticleEditEntry key={article.id} article={article}/>
                                    ))}
                                </div>
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
