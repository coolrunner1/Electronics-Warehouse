import "./ShopItem.css";
import PropTypes from 'prop-types';

export const ShopItem = (props) => {

    return (
        <>
            <article
                className="rounded-xl light:bg-white dark:bg-item-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        {props.item.image == null ? <img src="/placeholder.png" alt="image is missing" /> : <img src={props.item.image} alt={props.item.model} />}
                    </div>

                    <div className="mt-1 p-2">
                        <h2>{props.item.model}</h2>
                        <p className="mt-1 text-sm text-slate-400">{props.item.manufacturer}</p>
                        <p className="mt-1 text-sm text-slate-400">{props.item.status}</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="mb-1.5 text-xl font-bold text-blue-500">${props.item.unit_price}</p>

                            <button className="text-sm text-blue-500">Add to cart</button>
                        </div>
                    </div>
                </a>
            </article>
        </>
    )
};

ShopItem.propTypes = {
    item: PropTypes.object,
};