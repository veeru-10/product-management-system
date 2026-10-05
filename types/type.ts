export interface ProductType  {
  id : number,
  title : string,
  price : number,
  category : string,
  description : string,
  image : string
} 

export type NavbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};