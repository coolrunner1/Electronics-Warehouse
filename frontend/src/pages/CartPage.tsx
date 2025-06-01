import {CartItemsContainer} from "../components/Cart/CartItemsContainer.tsx";
import {CartInformationContainer} from "../components/Cart/CartInformationContainer.tsx";
import {useTranslation} from "react-i18next";

export const CartPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">{t('cart')}</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <CartItemsContainer/>
                    <CartInformationContainer/>
                </div>
            </div>
        </>
    )
}