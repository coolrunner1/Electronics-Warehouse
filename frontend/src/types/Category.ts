export type Category = {
    category_id: number;
    nameEN: string;
    nameRU: string;
    parent_id: number;
    subcategories: Category[];
}