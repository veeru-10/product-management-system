import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "@/types/type";
import { cartInitilizer } from "@/store/initializers/cartInitilizers/cart.initilizer";

// export interface CartState {
//   cartItems : ProductType[];
//   cartCount : number;
// }

// const initialState : CartState = {
//   cartItems : [],
//   cartCount : 0,
// }

export const cartSlice = createSlice({
  name : 'cart',
  initialState : cartInitilizer,
  reducers : {
    addToCart(state, action : PayloadAction<ProductType>) {
      state.cartItems.push(action.payload);
      state.cartCount = state.cartItems.length // payload contains actual data
    },
    removeFromCart(state, action : PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
      state.cartCount = state.cartItems.length;
    },
  }
})

export const { addToCart , removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;