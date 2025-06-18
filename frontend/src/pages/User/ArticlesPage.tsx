import {AxiosError} from 'axios'
import {LoadingIndicator} from '../../components/Global/LoadingIndicator.tsx'
import {Pagination} from '../../components/Pagination/Pagination.tsx'
import {useTranslation} from 'react-i18next'
import {Article} from '../../types/Article.ts'
import {useQuery} from '@tanstack/react-query'
import {fetchArticles} from '../../api/articles.ts'
import {useState} from 'react'
import {ArticleEntry} from "../../components/Global/ArticleEntry.tsx";

export const ArticlesPage = () => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    const {t} = useTranslation()

    const {data, isLoading, isError, error} = useQuery<{
        articles: Article[]
        pagination: number
    }>({
        queryFn: fetchArticles,
        queryKey: ['articles', page, itemsPerPage],
    })

    return (
        <div className='flex flex-col w-full p-4'>
            <h2 className='mb-10 text-center text-2xl font-bold'>{t('news')}</h2>
            <section className='light:bg-gray-200'>
                {isError && (
                    <>
                        {(error as AxiosError).status === 404 ? (
                            <div className='text-center text-xl'>{t('no-items')}</div>
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
                                        {t('no-articles-found')}
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
