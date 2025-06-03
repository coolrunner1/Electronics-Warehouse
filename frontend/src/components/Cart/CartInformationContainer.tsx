import {clearCart} from "../../slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {RootState} from "../../state/store";
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

export const CartInformationContainer = () => {
    const user = useSelector((state: RootState) => state.user);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {items, quantity, amount} = useSelector((state: RootState) => state.cart);

    const onCheckOutClick = () => {
        navigate("/checkout");
        /*const postBody = {
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
            });*/
    };

    return (
        <>
            {quantity !== 0 &&
                <div className="bg-light-default dark:bg-dark-default mt-6 h-full rounded-lg p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">{t('items-in-cart')}</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{quantity}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">{t('total')}</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${amount}</p>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={onCheckOutClick}>{t('checkout')}
                    </button>
                </div>
            }

        </>
    )
}