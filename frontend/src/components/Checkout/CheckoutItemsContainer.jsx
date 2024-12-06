import {CheckoutItem} from "./CheckoutItem.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const CheckoutItemsContainer = () => {
    const {items} = useSelector((state) => state.cart);
    useEffect(() => {
        console.log(items)
    }, [])
    return (
        <>
                {items.length > 0
                    ? <div className="rounded-lg md:w-2/3">
                        {items.map(item => <CheckoutItem key={item.item_id} item={item} />)}
                    </div>
                    : <div className="flex text-center items-center pr-36 pl-36 text-2xl">Cart is empty.</div>
                }
        </>
    )
}