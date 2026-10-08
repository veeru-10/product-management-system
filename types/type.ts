

export interface NavbarProps  {
  search: string;
  onSearchChange: (value: string) => void;
  onClickLogout : () => void;
};

export interface ToastProviderProps {
  children : React.ReactNode
}

export interface User {
  id : number,
  email : string,
  password : string,
  accessToken : string,
  refreshToken : string
}