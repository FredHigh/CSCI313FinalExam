import { Product } from "./product";

export interface Order {
    order_id: number;
    user_id: number;
    products: Product[];
    price: number;
    date: string;   
}