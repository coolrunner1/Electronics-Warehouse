import {CartItem} from "./CartItem.tsx";
import {useSelector} from "react-redux";
import {ItemInCart} from "../../types/Item";
import {RootState} from "../../state/store";
import {useTranslation} from "react-i18next";

export const CartItemsContainer = () => {
    const {items} = useSelector((state: RootState) => state.cart);
    const {t} = useTranslation();

    return (
        <>
                {items.length > 0
                    ? <div className="bg-light-default dark:bg-dark-default rounded-lg md:w-2/3">
                        {items.map((item: ItemInCart) => <CartItem key={item.item_id} item={item} />)}
                    </div>
                    : <div className="flex text-center items-center pr-36 pl-36 text-2xl">{t('cart-empty')}</div>
                }
        </>
    )
}