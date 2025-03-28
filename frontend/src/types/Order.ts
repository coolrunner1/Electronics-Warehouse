export type Order = {
    order_id: number;
    client_id: number;
    status: string;
    timestamp: string;
    total_items: number;
    total_amount: number;
}