import {ShopItem} from "../ShopItem/ShopItem.jsx";

export const ItemsContainer = () => {
    return (
        <>

            <section className="light:bg-gray-200">
                <div
                    className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />




                </div>
            </section>

        </>
)
}