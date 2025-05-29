import {ShopItem} from "./ShopItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import {RootState} from "../../state/store";
import {Item} from "../../types/Item.ts";


/*
ToDo: Refactor
*/
export const ItemsContainer = () => {
    const [itemsList, setItemsList] = useState<Item[]>([]);
    const [, setRenderCount] = useState(0);

    const {category, manufacturer, sortBy, sortingDirection} = useSelector((state: RootState) => state.filters);

    const location = useLocation();

    const makeServerRequest = (path: string) => {
        axios.get("http://localhost:8000" + path)
            .then((response) => setItemsList(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setItemsList([]);
            });
    }

    const getAllItems = () => {
        makeServerRequest("/items");
    }

    useEffect(() => {
        if (location.search === null || location.search === "" || location.search === "?") {
            getAllItems();
        } else {
            makeServerRequest("/items/search/"+location.search.slice(1));
        }
    }, [location]);

    useEffect(() => {
        try {
            if (sortingDirection === "Ascending" && sortBy === "Price") {
                setItemsList(itemsList.sort((a: Item, b: Item) => a.unit_price - b.unit_price));
            } else if (sortingDirection === "Descending" && sortBy === "Price") {
                setItemsList(itemsList.sort((a: Item, b: Item) => a.unit_price - b.unit_price).reverse());
            } else if (sortingDirection === "Ascending" && sortBy === "Name") {
                setItemsList(itemsList.sort((a: Item, b: Item) => a.model.localeCompare(b.model)));
            } else if (sortingDirection === "Descending" && sortBy === "Name") {
                setItemsList(itemsList.sort((a: Item, b: Item) => b.model.localeCompare(a.model)));
            }
        } catch (error) {
            console.error('Error sorting items:', error);
        }
        setRenderCount((prev) => prev + 1);
    }, [sortBy, sortingDirection]);

    /*
    ToDo: Refactor using react-query
    this shit does not work anymore
    */
    useEffect(() => {
        if ((category === 'All' || category === 'Все') && (manufacturer === 'All' || manufacturer === 'Все')) {
            getAllItems();
        } else if (!(category === 'All' || category === 'Все') && (manufacturer === 'All' || manufacturer === 'Все')) {
            makeServerRequest("/items/search/category/"+category);
        } else if ((category === 'All' || category === 'Все') && !(manufacturer === 'All' || manufacturer === 'Все')) {
            makeServerRequest("/items/search/manufacturer/"+manufacturer);
        } else if (!(category === 'All' || category === 'Все') && !(manufacturer === 'All' || manufacturer === 'Все')) {
            makeServerRequest("/items/search/category/"+category+"/manufacturer/"+manufacturer);
        }
    }, [category, manufacturer]);

    useEffect(() => {
        if(category === 'all' && manufacturer === 'all') {
            getAllItems();
        } else if (category === 'all' && manufacturer !== 'all') {
            makeServerRequest("/items/search/manufacturer/"+manufacturer);
        } else if (category !== 'all' && manufacturer !== 'all') {
            makeServerRequest("/items/search/category/"+category+"/manufacturer/"+manufacturer);
        }
    }, [manufacturer]);

    return (
        <>
            <section className="light:bg-gray-200">
                <div
                    className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {itemsList.length !== 0 ? itemsList.map((item) => (
                            <ShopItem key={item.item_id} item={item} />
                    )) : <div className="text-2xl">Not found</div>}

                </div>
            </section>

        </>
)
}