import { AxiosError } from 'axios'
import { LoadingIndicator } from '../components/Global/LoadingIndicator'
import { Pagination } from '../components/Pagination/Pagination'
import { useTranslation } from 'react-i18next'
import { Article } from '../types/Article'
import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api/articles'
import { useState } from 'react'

export const NewsPage = () => {
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)

  const { i18n, t } = useTranslation()

  const { data, isLoading, isError, error } = useQuery<{
    articles: Article[]
    pagination: number
  }>({
    queryFn: fetchArticles,
    queryKey: ['articles', page, itemsPerPage],
  })

  return (
    <div className='flex flex-col w-full'>
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
        {isLoading && <LoadingIndicator />}
        {!isLoading && !isError && (
          <>
            {data?.articles && (
              <>
                {data?.articles.length ? (
                  <>
                    <div className='flex flex-col items-center gap-4 mt-4'>
                      <h2 className='text-4xl font-bold'>{t('news')}</h2>
                      {data?.articles.map((article: Article) => (
                        <>
                          <div className='w-1/2 py-5 text-left px-4 rounded-xl shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300'>
                            <h2 className='text-3xl font-bold'>
                              {i18n.language === 'ru'
                                ? article.titleRU
                                : article.titleEN}
                            </h2>
                            <p className='text-xl'>
                              {i18n.language === 'ru'
                                ? article.descriptionRU
                                : article.descriptionEN}
                            </p>
                          </div>
                          <hr className='h-px w-1/2'></hr>
                        </>
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
                  </>
                ) : (
                  <div className='text-center text-xl'>
                    {t('no-items-found')}
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
