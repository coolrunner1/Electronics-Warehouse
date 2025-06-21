import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";
import {fetchItems} from "../../api/items.ts";
import {ItemInShop} from "../../types/Item.ts";
import {TopItemEntry} from "../../components/Home/TopItemEntry.tsx";
import {fetchArticles} from "../../api/articles.ts";
import { ArticleEntry } from "../../components/Articles/ArticleEntry.tsx";
import {Article} from "../../types/Article.ts";
import {LoadingIndicator} from "../../components/Global/LoadingIndicator.tsx";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const {data: topItems, isLoading: isItemsLoading} = useQuery({
        queryFn: fetchItems,
        queryKey: ['items', 1, 6, undefined, 'last-arrival', 'desc', undefined, undefined, 'true'],
        refetchInterval: 300000,
    });

    const {data: topArticles, isLoading: isArticlesLoading} = useQuery({
        queryFn: fetchArticles,
        queryKey: ['items', 1, 6],
        refetchInterval: 300000,
    });

    return (
        <div className={"flex flex-col"}>
            <div className="flex flex-col-reverse md:flex-row justify-between lg:px-20 bg-light-default dark:bg-[#2b2a33]">
                <div className="p-10">
                    <div className="text-2xl sm:text-4xl font-bold">{t('main-page-title')}</div>
                    <div className="my-2 font-light">{t('main-page-subtitle')}</div>
                    <button
                        onClick={() => navigate('/store')}
                        type="button"
                        className="my-5 text-md text-white font-bold py-2 px-10 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out"
                    >
                        {t('browse-shop')}
                    </button>
                </div>
                <img
                    className='p-10 object-cover object-center'
                    src="/shop-image.png"
                    title="Shop Image"
                    alt="shop-image"
                    height={"500px"}
                    width={"500px"}
                />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-5 m-auto max-w-6xl justify-center">
                <div className="bg-light-default dark:bg-dark-default rounded-lg p-6 my-5 sm:shadow-md">
                    <h1 className="text-center font-bold text-2xl sm:m-5">{t('new-arrivals')}</h1>
                    {isItemsLoading && <LoadingIndicator/>}
                    <div className="sm:grid sm:grid-cols-2 lg:block">
                        {topItems && topItems.items.map((item: ItemInShop, key: number) => (
                            <TopItemEntry item={item} key={key}/>
                        ))
                        }
                    </div>
                </div>
                <div className="bg-light-default dark:bg-dark-default rounded-lg p-6 my-5 sm:shadow-md">
                    <h1 className="text-center font-bold text-2xl sm:m-5">{t('new-articles')}</h1>
                    {isArticlesLoading && <LoadingIndicator/>}
                    <div className="flex flex-col gap-2">
                        {topArticles && topArticles.articles.map((article: Article, key: number) => (
                                <ArticleEntry article={article} key={key}/>
                            )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};