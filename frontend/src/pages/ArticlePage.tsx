import { useParams } from 'react-router-dom'
import { getArticleById } from '../api/articles'
import { useQuery } from '@tanstack/react-query'
import { LoadingIndicator } from '../components/Global/LoadingIndicator'
import { useTranslation } from 'react-i18next'

export const ArticlePage = () => {
  const { id } = useParams()
  const { i18n } = useTranslation()

  const { data, isLoading, error } = useQuery({
    queryFn: () => getArticleById(id!),
    queryKey: ['article', id],
    select: (response) => response.data,
  })

  return (
    <div>
      {isLoading && <LoadingIndicator />}
      {error && <div className='text-center text-xl'>{error.message}</div>}
      {data && (
        <div className='flex justify-center items-center mt-5'>
          <div className='flex flex-col w-1/2 gap-4'>
            <h2 className='text-3xl text-center'>
              {i18n.language === 'ru' ? data.titleRU : data.titleEN}
            </h2>
            <hr className='w-full' />
            <p
              className='text-left text-xl w-full'
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language === 'ru' ? data.contentRU : data.contentEN,
              }}
            ></p>
          </div>
        </div>
      )}
    </div>
  )
}
