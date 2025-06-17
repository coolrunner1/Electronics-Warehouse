import {useQuery} from "@tanstack/react-query";
import {getItemById} from "../api/items.ts";
import {useNavigate, useParams} from "react-router-dom";
import {LoadingIndicator} from "../components/Global/LoadingIndicator.tsx";
import {useTranslation} from "react-i18next";
import {ItemImage} from "../components/Global/ItemImage.tsx";
// @ts-ignore
import StarRatings from 'react-star-ratings';
import {MouseEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setManufacturer} from "../slices/filtersSlice.ts";
import {addToCart} from "../slices/cartSlice.ts";
import {ItemInShop} from "../types/Item.ts";
import {ImageModal} from "../components/ShopItemPage/ImageModal.tsx";

export const ShopItemPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {t, i18n} = useTranslation();
    const [clicked, setClicked] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);

    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ['item', id],
        queryFn: getItemById
    });

    const sendToCart = () => {
        if (!data) return;
        let item: any = Object.assign({}, data);
        if (item?.details) delete item.details;
        dispatch(addToCart(item as ItemInShop));
    }

    const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (clicked) {
            return;
        }
        sendToCart();
        setClicked(true);
    }

    const onBuyNowClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendToCart();
        navigate("/cart")
    }

    return (
        <div>
            {isLoading && <LoadingIndicator/>}
            {error && (
                <div className='text-center text-xl'>{error.message}</div>
            )}
            {data && data?.details &&
                <div className="min-h-full min-w-full flex flex-col gap-10 justify-center items-center">
                    {showImageModal &&
                        <ImageModal
                            setShowImageModal={setShowImageModal}
                            imagePath={data.image_path}
                            title={data.modelEN}
                        />
                    }
                    <div
                        className="flex flex-col sm:flex-row sm:gap-5 m-auto mt-5 max-w-3xl justify-between bg-light-default dark:bg-dark-default rounded-xl p-3 sm:shadow-lg"
                    >
                        <div
                            onClick={() => setShowImageModal(true)}
                            className="relative max-w-80 m-auto flex items-end overflow-hidden rounded-xl"
                        >
                            <ItemImage imagePath={data.image_path} title={data.modelEN}/>
                        </div>
                        <div className="m-auto p-2">
                            <span
                                className="pb-2 font-bold text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out"
                                onClick={() => {
                                    dispatch(setManufacturer(data?.manufacturer))
                                    navigate(`/store`);
                                }}
                            >{t('more-items-by')} {data.manufacturer}</span>
                            <h2 className="my-2 font-bold">{i18n.language === "ru" ? data.modelRU : data.modelEN}</h2>
                            <p className="mt-1 text-sm text-slate-400">{data.manufacturer}</p>
                            <p className="mt-1 text-sm text-slate-400">
                                {data.units_in_stock > 0
                                    ? t('units-in-stock')+': '+data.units_in_stock
                                    : t('out-of-stock')
                                }
                            </p>
                            <div className="flex gap-1">
                                <StarRatings
                                    rating={data.score/2}
                                    starRatedColor="#ffcf00"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="17px"
                                    starSpacing="3px"
                                />
                                <div>({data.review_count || 0})</div>
                            </div>
                            <div className="mt-3 p-2 flex items-end justify-between gap-2">
                                <p className="mb-1.5 text-xl font-bold text-blue-500">${data.unit_price}</p>
                                {data.units_in_stock > 0 &&
                                    <>
                                        <button
                                            className="text-sm text-white font-bold py-2 px-3 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out"
                                            onClick={onAddToCartClick}
                                        >
                                            {!clicked ? t('add-to-cart') : t('added-to-cart')}
                                        </button>
                                        <button
                                            className="text-sm text-white font-bold py-2 px-3 bg-red-500 hover:bg-red-700 focus:ring-2 focus:ring-red-900 rounded-md transition-all duration-300 ease-in-out"
                                            onClick={onBuyNowClick}
                                        >
                                            {t('buy-now')}
                                        </button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full max-w-3xl bg-light-default dark:bg-dark-default rounded-xl p-10 shadow-lg">
                        <h1 className="mb-5 text-center text-2xl font-bold">{t('description')}</h1>
                        <div className="sm:px-10" dangerouslySetInnerHTML={{__html: i18n.language === 'ru' ? data.details.descriptionRU : data.details.descriptionEN}}></div>
                        <h1 className="mt-10 mb-5 text-center text-2xl font-bold">{t('item-specs')}</h1>
                        <div className="sm:px-10" dangerouslySetInnerHTML={{__html: i18n.language === 'ru' ? data.details.specsRU : data.details.specsEN}}></div>
                    </div>
                    <div className="flex flex-col w-full max-w-3xl bg-light-default dark:bg-dark-default rounded-xl p-10 shadow-lg">
                        <h1 className="mb-5 text-center text-2xl font-bold">{t('reviews')}</h1>
                        <div>NOT IMPLEMENTED</div>
                    </div>
                </div>
            }
        </div>
    );
};