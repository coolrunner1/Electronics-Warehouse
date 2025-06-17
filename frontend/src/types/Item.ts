import {Category} from "./Category.ts";

export type Item = {
    item_id: number;
    category_id: number;
    modelEN: string;
    modelRU: string;
    image_path?: string;
    manufacturer: string;
    unit_price: number;
    score: number;
}

export type ItemDetails = {
    descriptionEN: string;
    descriptionRU: string;
    specsEN: string;
    specsRU: string;
}

export type ItemDetailed = ItemInShop & {
    details: ItemDetails;
    category: Category;
}

export type ItemInShop = Item & {
    date_of_arrival: string;
    units_in_stock: number;
    faulty_units: number;
    review_count: number;
}

export type ItemInCart = ItemInShop & {
    numberInCart: number;
}

export type ItemInOrder = Item &{
    quantity: number;
    returned_units: number;
    order_product_id: number
    order_id: number
}

export type ItemInReturn = Item & {
    status: string;
    quantity: number;
    return_date: string,
    order_return_id: number,
    reason: string,
    description: string,
    order_id: number
}