import {useTranslation} from "react-i18next";
import {Article} from "../../types/Article.ts";
import {useNavigate} from "react-router-dom";

export type TopArticleEntryProps = {
    article: Article,
}

export const ArticleEntry = (props: TopArticleEntryProps) => {
    const {i18n} = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <div
                onClick={() => navigate(`/articles/${props.article.id}`)}
                className='bg-light-default dark:bg-dark-default py-5 text-left px-4 rounded-xl shadow-md'
            >
                <h2 className='text-xl sm:text-xl font-bold'>
                    {i18n.language === 'ru'
                        ? props.article.titleRU
                        : props.article.titleEN}
                </h2>
                <p className='text-lg'>
                    {i18n.language === 'ru'
                        ? props.article.descriptionRU
                        : props.article.descriptionEN}
                </p>
            </div>
        </>
    );
};