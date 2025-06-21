import {incrementCartItemNumber, decrementCartItemNumber, removeCartItem} from "../../slices/cartSlice";
import {useDispatch} from "react-redux";
import {NumberToggle} from "../Global/NumberToggle";
import {ItemInCart} from "../../types/Item";
import {useTranslation} from "react-i18next";

export type CartItemProps = {
    item: ItemInCart,
};

export const CartItem = (
    props: CartItemProps
) => {
    const {i18n} = useTranslation();
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCartItemNumber(props.item));
    }

    const decrement = () => {
        dispatch(decrementCartItemNumber(props.item));
    }

    const onRemoveClick = () => {
        dispatch(removeCartItem(props.item));
    }

    return (
        <>
            <div
                className="bg-light-default dark:bg-dark-default justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start">
                {props.item.image_path == null
                    ? <img src="/placeholder.png" alt="image is missing" className="w-full rounded-lg sm:w-40" />
                    : <img src={`${import.meta.env.VITE_BASE_URL}/${props.item.image_path}`} alt={props.item.modelEN} className="w-full rounded-lg sm:w-40"  />}
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold light:text-gray-900">{i18n.language === 'ru' ? props.item.modelRU : props.item.modelEN}</h2>
                        <p className="mt-1 text-xs">{props.item.manufacturer}</p>
                        <p className="mt-1 text-xs">{i18n.language === "ru" ? props.item.category.nameRU : props.item.category.nameEN}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <NumberToggle increment={increment} decrement={decrement} value={props.item.numberInCart}/>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">${(props.item.unit_price * props.item.numberInCart).toFixed(2)}</p>
                            <svg onClick={onRemoveClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor"
                                 className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}