import {clearCart} from "../../slices/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export const CheckoutInformationContainer = () => {
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const {items, quantity, amount} = useSelector((state) => state.cart);

    const onCheckOutClick = () => {
        const postBody = {
            items: items,
            clientId: user.userInfo.client_id,
            itemCount: quantity,
            itemTotal: amount,
        }
        axios.post("http://localhost:8000/orders", postBody)
            .then(response => console.log(response.data))
            .then(() => {dispatch(clearCart())})
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            });
    };

    return (
        <>
            {quantity === 0
                ? null :
                <div className="mt-6 h-full rounded-lg p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Items in cart</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{quantity}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${amount}</p>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={onCheckOutClick}>Check out
                    </button>
                </div>
            }

        </>
    )
}