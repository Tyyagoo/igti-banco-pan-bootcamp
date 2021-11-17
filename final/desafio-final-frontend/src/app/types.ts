export interface IProduct {
  id: number;
  category: string;
  description: string;
  price: number;
}

export interface IMenu {
  products: Array<IProduct>;
  amount: number;
}
export interface IOrderItem {
  product: IProduct;
  amount: number;
}
export interface ICart {
  items: Array<IOrderItem>;
}

export interface IOrder extends ICart {
  id: number;
  datetime: string;
  state: string;
}
