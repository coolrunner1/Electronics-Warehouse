import {CheckoutItem} from "./CheckoutItem";
import {useSelector} from "react-redux";
import {Item} from "../../types/Item";
import {RootState} from "../../state/store";

export const CheckoutItemsContainer = () => {
    const {items} = useSelector((state: RootState) => state.cart);

    return (
        <>
                {items.length > 0
                    ? <div className="rounded-lg md:w-2/3">
                        {items.map((item: Item) => <CheckoutItem key={item.item_id} item={item} />)}
                    </div>
                    : <div className="flex text-center items-center pr-36 pl-36 text-2xl">Cart is empty.</div>
                }
        </>
    )
}