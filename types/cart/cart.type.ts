import { ProductType } from "../type";

export interface CartState {
  cartItems : ProductType[];
  cartCount : number;
}