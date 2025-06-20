import { useParams } from 'react-router-dom'
import { getArticleById } from '../../api/articles.ts'
import { useQuery } from '@tanstack/react-query'
import { LoadingIndicator } from '../../components/Global/LoadingIndicator.tsx'
import { useTranslation } from 'react-i18next'

export const ArticlePage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getArticleById(id!),
    queryKey: ['article', id],
    select: (response) => response.data,
  })

  return (
    <div className="w-full">
      {isLoading && <LoadingIndicator />}
      {error && <div className='text-center text-xl'>{error.message}</div>}
      {data && (
        <div className='flex justify-center items-center my-5'>
          <div className='flex flex-col max-w-4xl w-full gap-4 p-2 sm:p-5'>
            <h2 className='text-3xl text-center'>
              {i18n.language === 'ru' ? data.titleRU : data.titleEN}
            </h2>
            <span className="text-center font-light text-md">
              {i18n.language === 'ru' ? data.descriptionRU : data.descriptionEN}
            </span>
            <span className="text-center font-light text-md">
              {data.createdAt && new Date(data.createdAt).toLocaleString()}
            </span>
            <hr className='w-full' />
            <article
              className='prose lg:prose-md dark:prose-invert text-left text-xl w-full'
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language === 'ru' ? data.contentRU : data.contentEN,
              }}
            ></article>
          </div>
        </div>
      )}
    </div>
  )
}
