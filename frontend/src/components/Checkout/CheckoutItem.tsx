import {ItemInCart} from "../../types/Item";
import {useTranslation} from "react-i18next";

export type CheckoutItemProps = {
    item: ItemInCart,
};

export const CheckoutItem = (
    props: CheckoutItemProps
) => {
    const {i18n, t} = useTranslation();

    return (
        <>
            <div
                className="justify-between mb-2 rounded-lg p-6 shadow-md sm:flex sm:justify-center">
                {props.item.image_path == null
                    ? <img src="/placeholder.png" alt="image is missing" className="w-full rounded-lg sm:w-30" />
                    : <img src={`${import.meta.env.VITE_BASE_URL}/${props.item.image_path}`} alt={props.item.modelEN} className="w-full rounded-lg sm:w-30"  />}
                <div className="my-auto sm:ml-4 sm:flex sm:w-full sm:justify-between sm:gap-3">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold light:text-gray-900">{i18n.language === 'ru' ? props.item.modelRU : props.item.modelEN}</h2>
                        <p className="text-sm">{props.item.manufacturer}</p>
                        <p className="text-sm">{i18n.language === "ru" ? props.item.category.nameRU : props.item.category.nameEN}</p>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <p className="text-sm">{t('price-per-unit')}: ${props.item.unit_price}</p>
                        <p className="text-sm">{t('number-of-items')}: {props.item.numberInCart}</p>
                        <p className="text-lg">{t('total-price')}: ${(props.item.unit_price * props.item.numberInCart).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}