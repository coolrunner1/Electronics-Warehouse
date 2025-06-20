import {t} from 'i18next'
import {useState} from "react";
import {NEW_ENTRY} from "../../constants/newEntry.ts";
import {createArticle, updateArticle} from "../../api/articles.ts";
import {setTableRefresh} from "../../slices/tableSlice.ts";
import {Article} from "../../types/Article.ts";
import { useDispatch } from 'react-redux';
import {TextEditor} from "../Global/TextEditor.tsx";
import {BlueEditPageButton} from "../EditPage/BlueEditPageButton.tsx";

export type ArticleEditModal = {
    article: Article;
    onClose: () => void
}

export const ArticleEditModal = (props: ArticleEditModal) => {
    const [titleEN, setTitleEN] = useState(props.article.titleEN);
    const [titleRU, setTitleRU] = useState(props.article.titleRU);
    const [descriptionEN, setDescriptionEN] = useState(props.article.descriptionEN);
    const [descriptionRU, setDescriptionRU] = useState(props.article.descriptionRU);
    const [contentEN, setContentEN] = useState(props.article.contentEN);
    const [contentRU, setContentRU] = useState(props.article.contentRU);

    const dispatch = useDispatch();

    const onClickSave = async () => {
        const requestBody = {
            titleEN,
            titleRU,
            descriptionEN,
            descriptionRU,
            contentEN,
            contentRU,
        }
        if (props.article.id === NEW_ENTRY) {
            await createArticle(requestBody).then(() =>
                dispatch(setTableRefresh(true)),
            )
            props.onClose();
        } else {
            await updateArticle(props.article.id, requestBody).then(() =>
                dispatch(setTableRefresh(true)),
            )
            props.onClose();
        }
    }
    return (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-2xl flex items-center justify-center z-50'>
            <div className='bg-light-default dark:bg-dark-default rounded-lg shadow-xl w-full max-h-screen overflow-scroll mx-4'>
                <div className='flex justify-between items-center border-b px-6 py-4'>
                    <button
                        onClick={props.onClose}
                        className='text-gray-500 hover:text-gray-700 focus:outline-none'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 overflow-scroll'>
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('title-en')}
                    </h2>
                    <input
                        className="border rounded-lg p-2"
                        value={titleEN}
                        onChange={(e) => setTitleEN(e.target.value)}
                    />
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('title-ru')}
                    </h2>
                    <input
                        className="border rounded-lg p-2"
                        value={titleRU}
                        onChange={(e) => setTitleRU(e.target.value)}
                    />
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('description-en')}
                    </h2>
                    <textarea
                        className="border rounded-lg p-2"
                        value={descriptionEN}
                        onChange={(e) => setDescriptionEN(e.target.value)}
                    />
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('description-ru')}
                    </h2>
                    <textarea
                        className="border rounded-lg p-2"
                        value={descriptionRU}
                        onChange={(e) => setDescriptionRU(e.target.value)}
                    />
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('content-en')}
                    </h2>
                    <TextEditor
                        value={contentEN}
                        setValue={setContentEN}
                    />
                    <h2 className='text-xl sm:text-xl font-bold'>
                        {t('content-ru')}
                    </h2>
                    <TextEditor
                        value={contentRU}
                        setValue={setContentRU}
                    />
                    <p className="font-light">
                        {props.article.createdAt && new Date(props.article.createdAt).toLocaleString()}
                    </p>
                </div>
                <div className='flex justify-center border-t px-6 py-4'>
                    <BlueEditPageButton name={t('save')} onClick={onClickSave} />
                </div>
            </div>
        </div>
    )
}
