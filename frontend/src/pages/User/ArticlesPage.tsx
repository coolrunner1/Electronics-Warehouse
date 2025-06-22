import {AxiosError} from 'axios'
import {LoadingIndicator} from '../../components/Global/LoadingIndicator.tsx'
import {Pagination} from '../../components/Pagination/Pagination.tsx'
import {useTranslation} from 'react-i18next'
import {Article} from '../../types/Article.ts'
import {useQuery} from '@tanstack/react-query'
import {fetchArticles} from '../../api/articles.ts'
import {useEffect, useState} from 'react'
import {ArticleEntry} from "../../components/Articles/ArticleEntry.tsx";
import {useLocation} from "react-router-dom";

export const ArticlesPage = () => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);
    const [search, setSearch] = useState('');

    const {t} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?") {
            setSearch('');
            return;
        }
        setSearch(location.search.slice(1));
    }, [location]);

    const {data, isLoading, isError, error} = useQuery<{
        articles: Article[]
        pagination: number
    }>({
        queryFn: fetchArticles,
        queryKey: ['articles', page, itemsPerPage, search],
    });

    useEffect(() => {
        if (!data) return;
        if (data?.pagination < page && !data?.articles.length) {
            setPage(1);
            return;
        }
    }, [data]);

    return (
        <div className='flex flex-col w-full p-4'>
            <h2 className='mb-10 text-center text-2xl font-bold'>{t('news')}</h2>
            <section className='light:bg-gray-200'>
                {isError && (
                    <>
                        {(error as AxiosError).status === 404 ? (
                            <div className='text-center text-xl'>{t('no-articles')}</div>
                        ) : (
                            <div className='text-center text-xl'>{error.message}</div>
                        )}
                    </>
                )}
                {isLoading && <LoadingIndicator/>}
                {!isLoading && !isError && (
                    <>
                        {data?.articles && (
                            <>
                                {data?.articles.length ? (
                                    <div >
                                        <div className='rounded-lg flex flex-col gap-2 md:p-6 my-5 mx-auto max-w-3xl'>
                                            {data?.articles.map((article: Article) => (
                                                <ArticleEntry article={article} key={article.id} />
                                            ))}
                                        </div>
                                        <div className='flex justify-center'>
                                            <Pagination
                                                currentPage={page}
                                                setCurrentPage={setPage}
                                                pageCount={data?.pagination}
                                                itemsPerPage={itemsPerPage}
                                                setItemsPerPage={setItemsPerPage}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='text-center text-xl'>
                                        {t('no-articles')}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </section>
        </div>
    )
}
