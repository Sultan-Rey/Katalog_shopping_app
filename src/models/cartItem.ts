
export interface CartItem{
    picture: string;
    name: string;
    brand: string;
    description: string;
    category: string;
    qty: number;
    size ?: string;
    color ?: string;
    shippingFee: number;
    deliveryFee: number;
    taxFee: number;
    deliveryDate: Date;
    price: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    amount: number;
  }