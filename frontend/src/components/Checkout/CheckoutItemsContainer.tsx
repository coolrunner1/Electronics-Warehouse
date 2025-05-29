import {CheckoutItem} from "./CheckoutItem";
import {useSelector} from "react-redux";
import {ItemInCart} from "../../types/Item";
import {RootState} from "../../state/store";
import {useTranslation} from "react-i18next";

export const CheckoutItemsContainer = () => {
    const {items} = useSelector((state: RootState) => state.cart);
    const {t} = useTranslation();

    return (
        <>
                {items.length > 0
                    ? <div className="rounded-lg md:w-2/3">
                        {items.map((item: ItemInCart) => <CheckoutItem key={item.item_id} item={item} />)}
                    </div>
                    : <div className="flex text-center items-center pr-36 pl-36 text-2xl">{t('cart-empty')}</div>
                }
        </>
    )
}