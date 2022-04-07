
import { CartItem } from "./cartItem";

export interface Order{
    orderId : string;
    items: CartItem[];
    date_order : Date;
    order_qty: number;
    amount: number;
    shipment ?: Shipment;
}

export interface Shipment{
    goods_departure ?: string;
    shipping_destination ?: string;
    carrier ?: string;
    trackingnumber ?: string;
    status ?: string; 
}