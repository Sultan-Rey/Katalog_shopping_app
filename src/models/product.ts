import { Displays } from "./display";

export interface Product{

    name: string;
    description: string;
    brand: string;
    rating: number;
    features: Features[];
    category: string;
    qty: number;
    shipment: string;
    policy: boolean;
    shippingFee: number;
    deliveryFee: number;
    taxFee: number;
    about ?: Text;
    deliveryDate ?: Date;
    status: boolean;
    ref ?: any;
    availability: string;
    display: Displays; 
    orderedqty ?: number  
  }

  export interface Features{
    pictures ?: string[];
    color: string;
    size: string;
    price: number;
  }