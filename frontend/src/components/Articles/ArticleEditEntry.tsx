import {RedButton} from '../Global/RedButton.tsx'
import {Article} from '../../types/Article.ts'
import {useTranslation} from 'react-i18next'
import {YellowButton} from '../Global/YellowButton.tsx'
import {ArticleEditModal} from './ArticleEditModal.tsx'
import {useState} from 'react'
import {deleteArticle} from '../../api/articles.ts'
import {useDispatch} from 'react-redux'
import {setTableRefresh} from '../../slices/tableSlice.ts'
import shortenArticleTitle from "../../utils/shortenArticleTitle.ts";
import {NEW_ENTRY} from "../../constants/newEntry.ts";

export type ArticleEntryProps = {
    article: Article
}

export const ArticleEditEntry = (props: ArticleEntryProps) => {
    const {t} = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const onClickDelete = async () => {
        if (props.article.id !== NEW_ENTRY) {
            await deleteArticle(props.article.id).then((res) => {
                dispatch(setTableRefresh(true));
                if (res.status === 204) {
                    alert(t('article-delete-success'))
                }
            })
        }
    }

    return (
        <div
            className='bg-light-default dark:bg-dark-default flex flex-col gap-5 py-5 text-left px-4 rounded-xl shadow-md'
        >
            {showModal &&
                <ArticleEditModal
                    article={props.article}
                    onClose={() => setShowModal(false)}
                />
            }
            {props.article.id === NEW_ENTRY ?
                <span className="text-center font-bold">{t('new-article')}</span> :
                <>
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('title-en')+': '+shortenArticleTitle(props.article.titleEN)}
                    </h2>
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('title-ru')+': '+shortenArticleTitle(props.article.titleRU)}
                    </h2>
                    <p className="font-light">
                        {props.article.createdAt && new Date(props.article.createdAt).toLocaleString()}
                    </p>
                </>
            }
            <div className='m-auto'>
                <YellowButton name={t('edit-page')} onClick={() => setShowModal(true)} />
                <RedButton name={t('delete')} onClick={onClickDelete} />
            </div>
        </div>
    )
}
