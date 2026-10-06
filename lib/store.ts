import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/lib/features/cart/cartSlice'
import productReducer from '@/lib/features/products/productsSlice'

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