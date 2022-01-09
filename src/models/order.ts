import { Paymethod } from "./paymethod";
import { Features, Product } from "./product";

export interface Order{
    orderId : string;
    product: Product[];
    date_order : Date;
    order_qty: number;
    amount: number;
    payment ?: Paymethod
    shipment ?: Shipment;
}

export interface Shipment{
    goods_departure ?: string;
    shipping_destination ?: string;
    carrier ?: string;
    trackingnumber ?: string;
    status ?: string; 
}