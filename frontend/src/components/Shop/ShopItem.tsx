import {addToCart} from "../../slices/cartSlice";
import {useDispatch} from "react-redux";
import {useState, MouseEvent} from "react";
import {ItemInShop} from "../../types/Item";
import {useTranslation} from "react-i18next";

export const ShopItem = (
    props: {
        item: ItemInShop,
    }
) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const onAddToCartClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(addToCart(props.item));
        e.preventDefault();
        setClicked(true);
    }

    return (
        <article
            className="rounded-xl light:bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <div>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    {props.item.image_path == null ? <img className="aspect-square object-scale-down" src="/placeholder.png" alt="image is missing" /> : <img className="aspect-square object-scale-down" src={`${import.meta.env.VITE_BASE_URL}/${props.item.image_path}`} alt={props.item.model} />}
                </div>

                <div className="mt-1 p-2">
                    <h2>{props.item.model}</h2>
                    <p className="mt-1 text-sm text-slate-400">{props.item.manufacturer}</p>
                    <p className="mt-1 text-sm text-slate-400">{props.item.status === 'In Stock' ? t('in-stock') : t('out-of-stock')}</p>
                    <p className="mt-1 text-sm text-slate-400">{t('units-in-stock')}: {props.item.units_in_stock}</p>

                    <div className="mt-3 flex items-end justify-between">
                        <p className="mb-1.5 text-xl font-bold text-blue-500">${props.item.unit_price}</p>
                        {props.item.status === 'In Stock' &&
                        !clicked
                            ? <button className="text-sm text-blue-500 p-2" onClick={onAddToCartClick}
                                      value={props.item.item_id}>{t('add-to-cart')}</button>
                            : <button className="text-sm text-blue-500 p-2"
                                      value={props.item.item_id}>{t('added-to-cart')}</button>
                        }

                    </div>
                </div>
            </div>
        </article>
    )
};