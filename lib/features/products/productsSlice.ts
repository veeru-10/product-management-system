import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/type";
import { getProducts } from "@/services/products/productService";

interface ProductsState {
  productItems : ProductType[],
  loading : boolean,
  error : string | null;
}

const initialState : ProductsState = {
  productItems : [],
  loading : false,
  error : null
}
export const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue : string}>(
  'products/fetchProducts',
  async(_, thunkAPI) => { // we use underScore since we are not passing any data through request
    try {
      return await getProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }
);

export const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers : {},
  extraReducers : (builder) => {  //it is a callback and it allows slice to listen and respond to external actions such as Handling Asynchronous Thunks 
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action:PayloadAction<ProductType[]>) => {
      state.loading = false;
      state.productItems = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
})

export default productSlice.reducer