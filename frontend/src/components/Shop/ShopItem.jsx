import "./ShopItem.css";
import PropTypes from 'prop-types';
import {addToCart} from "../../slices/cartSlice.js";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const ShopItem = (props) => {
    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    const onAddToCartClick = (e) => {
        dispatch(addToCart(props.item));
        e.preventDefault();
        setClicked(true);
    }

    return (
        <>
            <article
                className="rounded-xl light:bg-white dark:bg-item-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <div>
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        {props.item.image_path == null ? <img className="aspect-square object-scale-down" src="/placeholder.png" alt="image is missing" /> : <img className="aspect-square object-scale-down" src={props.item.image_path} alt={props.item.model} />}
                    </div>

                    <div className="mt-1 p-2">
                        <h2>{props.item.model}</h2>
                        <p className="mt-1 text-sm text-slate-400">{props.item.manufacturer}</p>
                        <p className="mt-1 text-sm text-slate-400">{props.item.status}</p>
                        <p className="mt-1 text-sm text-slate-400">Units in stock: {props.item.units_in_stock}</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="mb-1.5 text-xl font-bold text-blue-500">${props.item.unit_price}</p>
                            {props.item.status === 'In Stock' ?
                                !clicked
                                    ? <button className="text-sm text-blue-500" onClick={onAddToCartClick}
                                              value={props.item.item_id}>Add to cart</button>
                                    : <button className="text-sm text-blue-500"
                                              value={props.item.item_id}>Added to cart</button>
                                : null
                            }

                        </div>
                    </div>
                </div>
            </article>
        </>
    )
};

ShopItem.propTypes = {
    item: PropTypes.object,
};