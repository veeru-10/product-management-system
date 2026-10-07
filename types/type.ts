export interface NavbarProps  {
  search: string;
  onSearchChange: (value: string) => void;
  onClickLogout : () => void;
};

export interface User {
  id : number,
  email : string,
  password : string,
  accessToken : string,
  refreshToken : string
}