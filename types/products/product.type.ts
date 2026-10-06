import { ProductType } from "../type";

export interface ProductsState {
  productItems : ProductType[],
  loading : boolean,
  error : string | null;
}