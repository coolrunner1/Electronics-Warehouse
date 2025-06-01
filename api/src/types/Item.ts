export type Item = {
    item_id: number;
    category_id: number;
    modelEN: string;
    modelRU: string;
    image_path?: string;
    manufacturer: string;
    unit_price: number;
}