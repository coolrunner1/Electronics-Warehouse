import {ItemInShop} from "../../types/Item.ts";
import {useTranslation} from "react-i18next";
// @ts-ignore
import StarRatings from 'react-star-ratings';
import {BlueItemButton} from "../Global/BlueItemButton.tsx";
import {useNavigate} from "react-router-dom";
import shortenItemTitle from "../../utils/shortenItemTitle.ts";

export type TopItemEntryProps = {
    item: ItemInShop
};

export const TopItemEntry = (
    props: TopItemEntryProps
) => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <div
                className="bg-light-default dark:bg-dark-default justify-between m-auto mb-2 rounded-lg p-6 shadow-md lg:flex lg:justify-center">
                {props.item.image_path == null
                    ? <img src="/placeholder.png" alt="image is missing" className="w-full h-1/2 max-w-sm rounded-lg lg:w-30" />
                    : <img src={`${import.meta.env.VITE_BASE_URL}/${props.item.image_path}`} alt={props.item.modelEN} className="w-full h-1/2 max-w-sm rounded-lg lg:w-30"  />}
                <div className="my-auto lg:ml-4 lg:flex lg:w-full lg:justify-between lg:gap-3">
                    <div className="mt-5 lg:mt-0 max-w-36">
                        <h2 className="text-lg font-bold light:text-gray-900">{shortenItemTitle(i18n.language === 'ru' ? props.item.modelRU : props.item.modelEN)}</h2>
                        <p className="text-sm">{props.item.manufacturer}</p>
                        <div className="flex gap-1">
                            <StarRatings
                                rating={props.item.score}
                                starRatedColor="#ffcf00"
                                numberOfStars={5}
                                name='rating'
                                starDimension="14px"
                                starSpacing="3px"
                            />
                            <div>({props.item.review_count || 0})</div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0 max-w-36">
                        <p className="text-sm">{t('price-per-unit')}: ${props.item.unit_price}</p>
                        <p className="text-sm mb-2">{t('units-in-stock')}: {props.item.units_in_stock}</p>
                        <BlueItemButton
                            onClick={() => navigate(`/store/${props.item.item_id}`)}
                            text={t('show-item')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};