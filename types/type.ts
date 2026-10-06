export interface ProductType  {
  _id : number,
  title : string,
  isNew : boolean,
  oldPrice : number,
  discountedPrice : number, 
  price : number,
  category : string,
  type : string,
  stock : number,
  brand : string,
  size : string[],
  description : string,
  image : string,
  rating : number
} 


export interface ProductsApiResponse {
  data : ProductType[],
  totalProducts: number,
  totalPages: number,
  currentPage: number,
  perPage: number
}




export type NavbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};