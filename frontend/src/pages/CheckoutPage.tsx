import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import {ItemInCart} from "../types/Item.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {CheckoutItem} from "../components/Checkout/CheckoutItem.tsx";
import {useTranslation} from "react-i18next";

export const CheckoutPage = () => {
    const {items} = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        if (!items.length) {
            navigate("/cart");
        }
    }, [items]);

    return (
        <div className="flex flex-row items-center justify-center w-full">
            WORK IN PROGRESS
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="m-5 font-bold text-3xl">{t('order-form')}</h1>
                <form>
                    <label>
                        Payment method:
                        <select>
                            <option>By card</option>
                            <option>Cash payment</option>
                        </select>
                    </label>
                    <label>
                        Delivery method:
                        <select>
                            <option>Delivery</option>
                            <option>Self-pickup</option>
                        </select>
                    </label>
                    <label>
                        Address:
                        <select>
                            <option>Address as in profile</option>
                            <option>Custom address</option>
                        </select>
                    </label>
                    <label>
                        <input name="" value="address" />
                    </label>
                    <label>
                        <input name="" value="city" />
                    </label>
                    <label>
                        <input name="" value="region" />
                    </label>
                    <label>
                        <input name="" value="country" />
                    </label>
                </form>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="m-5 font-bold text-3xl">{t('order-details')}</h1>
                <div className="rounded-lg">
                    {items.map((item: ItemInCart) => <CheckoutItem key={item.item_id} item={item} />)}
                </div>
            </div>
        </div>
    )
};