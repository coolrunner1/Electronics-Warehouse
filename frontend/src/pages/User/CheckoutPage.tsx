import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {ItemInCart} from "../../types/Item.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CheckoutItem} from "../../components/Checkout/CheckoutItem.tsx";
import {useTranslation} from "react-i18next";
import {FormInput} from "../../components/Global/FormInput.tsx";
import {FormSelect} from "../../components/Global/FormSelect.tsx";

export const CheckoutPage = () => {
    const {items} = useSelector((state: RootState) => state.cart);
    const [paymentMethod, setPaymentMethod] = useState("card")
    const [deliveryMethod, setDeliveryMethod] = useState("delivery");
    const [deliveryAddress, setDeliveryAddress] = useState("address-as-in-profile");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [region, setRegion] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        if (!items.length) {
            navigate("/cart");
        }
    }, [items]);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <div className="bg-light-default dark:bg-dark-default flex flex-col items-center justify-center w-full">
                <h1 className="m-5 font-bold text-3xl">{t('order-form')}</h1>
                <div className="flex flex-col items-center justify-center w-full">
                    <FormSelect
                        options={['card', 'cash']}
                        value={paymentMethod}
                        label={t('payment-method')}
                        onChange={(e)=> setPaymentMethod(e.target.value)}
                    />
                    <FormSelect
                        options={['delivery', 'self-pickup']}
                        value={deliveryMethod}
                        label={t('delivery-method')}
                        onChange={(e)=> setDeliveryMethod(e.target.value)}
                    />
                    {deliveryMethod === 'delivery' &&
                        <FormSelect
                            options={['address-as-in-profile', 'custom-address']}
                            value={deliveryAddress}
                            label={t('delivery-address')}
                            onChange={(e)=> setDeliveryAddress(e.target.value)}
                        />
                    }
                </div>
                {deliveryMethod === 'delivery' && deliveryAddress === 'custom-address' &&
                    <>
                        <h2 className="m-5 font-bold text-2xl">{t('address-details')}</h2>
                        <div className='flex flex-wrap'>
                            <FormInput
                                name={t('address')}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder={t('address')}
                            />
                            <FormInput
                                name={t('city')}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder={t('city')}
                            />
                            <FormInput
                                name={t('region')}
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                placeholder={t('region')}
                            />
                            <FormInput
                                name={t('country')}
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder={t('country')}
                            />
                        </div>
                    </>
                }
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