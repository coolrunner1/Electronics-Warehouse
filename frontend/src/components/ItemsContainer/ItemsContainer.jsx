import {ShopItem} from "../ShopItem/ShopItem.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const ItemsContainer = () => {
    const [itemsList, setItemsList] = useState([]);

    const location = useLocation();

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?" ) {
            fetch("http://localhost:8000/items")
                .then((res) => res.json())
                .then((data) => setItemsList(data.rows))
                .catch((error) => {
                    console.error('Error fetching items:', error);
                    alert("Error fetching items: " + error.message);
                });
        } else {
            fetch("http://localhost:8000/items/search/"+location.search.slice(1))
                .then((res) => res.json())
                .then((data) => setItemsList(data.rows))
                .catch((error) => {
                    console.error('Error fetching items:', error);
                    alert("Error fetching items: " + error.message);
                });
        }
    }, [location]);


    return (
        <>
            <section className="light:bg-gray-200">
                <div
                    className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {itemsList != null ? itemsList.map((item, index) => (
                            <ShopItem key={index} item={item} />
                    )) : <div>Not found</div>}

                </div>
            </section>

        </>
)
}