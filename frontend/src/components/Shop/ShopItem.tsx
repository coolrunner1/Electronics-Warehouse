import {addToCart} from "../../slices/cartSlice";
import {useDispatch} from "react-redux";
import {useState, MouseEvent} from "react";
import {ItemInShop} from "../../types/Item";
import {useTranslation} from "react-i18next";
import {ItemImage} from "../Global/ItemImage.tsx";
// @ts-ignore
import StarRatings from 'react-star-ratings';
import {useNavigate} from "react-router-dom";

export const ShopItem = (
    props: {
        item: ItemInShop,
    }
) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {i18n, t} = useTranslation();

    const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (clicked) {
            return;
        }
        dispatch(addToCart(props.item));
        setClicked(true);
    }

    return (
        <article
            onClick={() => {navigate(`/store/${props.item.item_id}`)}}
            className="flex flex-col justify-between h-full bg-light-default dark:bg-dark-default rounded-xl p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
        >
            <div>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    <ItemImage imagePath={props.item.image_path} title={props.item.modelEN}/>
                </div>
                <div className="mt-2 p-2">
                    <h2>{i18n.language === "ru" ? props.item.modelRU : props.item.modelEN}</h2>
                    <p className="mt-1 text-sm text-slate-400">{props.item.manufacturer}</p>
                    <p className="mt-1 text-sm text-slate-400">
                        {props.item.units_in_stock > 0
                            ? t('units-in-stock')+': '+props.item.units_in_stock
                            : t('out-of-stock')
                        }
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{t('rating')}</p>
                    <div className="flex gap-1">
                        <StarRatings
                            rating={props.item.score/2}
                            starRatedColor="#ffcf00"
                            numberOfStars={5}
                            name='rating'
                            starDimension="14px"
                            starSpacing="3px"
                        />
                        <div>({props.item.review_count || 0})</div>
                    </div>
                </div>
            </div>
            <div className="mt-3 p-2 flex items-end justify-between">
                <p className="mb-1.5 text-xl font-bold text-blue-500">${props.item.unit_price}</p>
                {props.item.units_in_stock > 0 &&
                    <>
                        <button
                            className="text-sm text-white font-bold py-2 px-3 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out"
                            onClick={onAddToCartClick}
                            value={props.item.item_id}
                        >
                            {!clicked ? t('add-to-cart') : t('added-to-cart')}
                        </button>
                    </>
                }
            </div>
        </article>
    )
};