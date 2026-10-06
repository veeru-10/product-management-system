import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/store/slices/cartSlice/cart.slice'
import productReducer from '@/store/slices/productSlice/product.slice'

export const makeStore = () => {
  return configureStore({
    reducer : {
      cart : cartReducer,
      product : productReducer
    }
  })
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']> // type for useSelector
export type AppDispatch = AppStore['dispatch'] // type for useDispatch