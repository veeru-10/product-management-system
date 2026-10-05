import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/lib/features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer : {
      cart : cartReducer
    }
  })
};

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']> // type for useSelector
export type AppDispatch = AppStore['dispatch'] // type for useDispatch