import {Td, Tr} from 'react-super-responsive-table'
import {BlueButton} from '../Global/BlueButton'
import {RedButton} from '../Global/RedButton'
import {Article} from '../../types/Article'
import {useTranslation} from 'react-i18next'
import {YellowButton} from '../Global/YellowButton'
import {Modal} from './Modal'
import {useState} from 'react'
import {TextEditor} from '../Global/TextEditor'
import {TableTextInput} from '../Global/TableTextInput'
import {createArticle, deleteArticle, updateArticle} from '../../api/articles'
import {useDispatch} from 'react-redux'
import {setTableRefresh} from '../../slices/tableSlice'

export type ArticleEntryProps = {
    article: Article
}

export const ArticleTableEntry = ({article}: ArticleEntryProps) => {
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [titleEN, setTitleEN] = useState(article.titleEN)
    const [titleRU, setTitleRU] = useState(article.titleRU)
    const [descriptionEN, setDescriptionEN] = useState(article.descriptionEN)
    const [descriptionRU, setDescriptionRU] = useState(article.descriptionRU)
    const [contentEN, setContentEN] = useState(article.contentEN)
    const [contentRU, setContentRU] = useState(article.contentRU)
    const dispatch = useDispatch()

    const onClickDelete = async () => {
        if (article.id !== 99999) {
            await deleteArticle(article.id).then(() =>
                dispatch(setTableRefresh(true)),
            )
        }
    }

    const onClickEdit = async () => {
        const requestBody = {
            titleEN,
            titleRU,
            descriptionEN,
            descriptionRU,
            contentEN,
            contentRU,
        }
        if (article.id === 99999) {
            await createArticle(requestBody).then(() =>
                dispatch(setTableRefresh(true)),
            )
        } else {
            await updateArticle(article.id, requestBody).then(() =>
                dispatch(setTableRefresh(true)),
            )
        }
    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={t('edit-content')}
            >
                <h2 className='text-2xl'>{t('content-en')}</h2>
                <TextEditor
                    value={contentEN}
                    setValue={setContentEN}
                />
                <hr/>
                <h2 className='text-2xl'>{t('content-ru')}</h2>
                <TextEditor
                    value={contentRU}
                    setValue={setContentRU}
                />
            </Modal>
            <Tr className='border-b hover:bg-orange-100 dark:hover:bg-blue-600'>
                <Td className='p-3'>
                    <TableTextInput
                        value={titleEN}
                        onChange={(e) => setTitleEN(e.target.value)}
                    />
                </Td>
                <Td className='p-3'>
                    <TableTextInput
                        value={titleRU}
                        onChange={(e) => setTitleRU(e.target.value)}
                    />
                </Td>
                <Td className='p-3'>
                    <TableTextInput
                        value={descriptionEN}
                        onChange={(e) => setDescriptionEN(e.target.value)}
                    />
                </Td>
                <Td className='p-3'>
                    <TableTextInput
                        value={descriptionRU}
                        onChange={(e) => setDescriptionRU(e.target.value)}
                    />
                </Td>
                <Td className='p-3 px-5 flex justify-end'>
                    <BlueButton
                        onClick={onClickEdit}
                        name={t('save')}
                    />
                    <YellowButton
                        onClick={() => setIsModalOpen(true)}
                        name={t('edit-content')}
                    />
                    <RedButton
                        onClick={onClickDelete}
                        name={t('delete')}
                    />
                </Td>
            </Tr>
        </>
    )
}
