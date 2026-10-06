import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/products/product.type";
import { getProductsByService } from "@/store/services/products/product.service";
import { initialProductsState } from "@/store/slices/initialState/product.initial";

// interface ProductsState {
//   productItems : ProductType[],
//   loading : boolean,
//   error : string | null;
// }

// const initialState : ProductsState = {
//   productItems : [],
//   loading : false,
//   error : null
// }


export const productSlice = createSlice({
  name : 'product',
  initialState : initialProductsState,
  reducers : {},
  extraReducers : (builder) => {  //it is a callback and it allows slice to listen and respond to external actions such as Handling Asynchronous Thunks 
    builder
    .addCase(getProductsByService.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getProductsByService.fulfilled, (state, action:PayloadAction<ProductType[]>) => {
      state.loading = false;
      state.productItems = action.payload;
    })
    .addCase(getProductsByService.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
})

export default productSlice.reducer