import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "@/types/type";

interface ProductsState {
  products : ProductType[],
  loading : boolean,
  error : string | null
}

const initialState : ProductsState = {
  products : [],
  loading : false,
  error : null
}
export const fetchProducts = createAsyncThunk(
  'products/fetchDataProducts',
  async(_, thunkAPI) => {
    try {
      const response = await fetch("https://fakestoreapi.noksha.dev/api/products")
      const data = await response.json();
      const limitedData : ProductType = {
        id : data._id,
        title : data.title,
        price : data.price,
        category : data.category,
        description : data.description,
        image : data.image
      }
      return limitedData;
    } catch (error : any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name : 'products',
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    
  }
})