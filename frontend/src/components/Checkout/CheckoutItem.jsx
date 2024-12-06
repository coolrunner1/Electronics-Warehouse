import PropTypes from "prop-types";
import {incrementCartItemNumber, decrementCartItemNumber, removeCartItem} from "../../slices/cartSlice.js";
import {useDispatch} from "react-redux";

export const CheckoutItem = (props) => {
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
                className="justify-between mb-6 rounded-lg  p-6 shadow-md sm:flex sm:justify-start">
                {props.item.image_path == null
                    ? <img src="/placeholder.png" alt="image is missing" className="w-full rounded-lg sm:w-40" />
                    : <img src={props.item.image_path} alt={props.item.model} className="w-full rounded-lg sm:w-40" />}
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold light:text-gray-900">{props.item.model}</h2>
                        <p className="mt-1 text-xs light:text-gray-700">{props.item.manufacturer}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center ">
                                        <span
                                            className="cursor-pointer rounded-l py-1 px-3.5 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50" onClick={decrement}> - </span>
                            <input className="h-8 w-8 text-center text-xs outline-none"
                                   value={props.item.numberInCart} readOnly={true}/>
                            <span
                                className="cursor-pointer rounded-r  py-1 px-3 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50" onClick={increment}> + </span>
                        </div>
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

CheckoutItem.propTypes = {
    item: PropTypes.object,
};