export type Item = {
    item_id: number;
    category_id: number;
    model: string;
    image_path?: string;
    status?: string;
    manufacturer: string;
    unit_price: number;
    date_of_arrival?: string;
    units_in_stock?: number;
    faulty_units?: number;
    numberInCart?: number;
    quantity?: number;
    returned_units?: number;
    return_date?: string,
    order_return_id?: number,
    reason?: string,
    description?: string,
}