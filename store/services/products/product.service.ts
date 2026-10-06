import { ProductsApiResponse } from "@/types/type";
import { productsApi } from "@/apis/productsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const getProducts = async (): Promise<ProductType[]> => {
//   try {
//     const response = await productsApi()
//     if (!response.ok) {
//       throw new Error("Invalid Api");
//     }
//     const responseData : ProductsApiResponse = await response.json();
//     return responseData.data;
//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Failed to fetch user data";
//     console.error(message);
//     throw error instanceof Error ? error : new Error(message);
//   }
// };

// export const getProductsByService = createAsyncThunk<ProductType[], void, { rejectValue : string}>(
export const getProductsByService = createAsyncThunk(
  'products/fetchProducts',
  async(_, thunkAPI) => {
    try {
      const response = await productsApi()
    if (!response.ok) {
      throw new Error("Invalid Api");
    }
    const responseData : ProductsApiResponse = await response.json();
    return responseData.data;
    } catch (error) {
      // const errorMessage = error instanceof Error ? error.message : "failed to fetch data"
      return thunkAPI.rejectWithValue(error);
    }
  }
);



// export const getProductById = async(id : number) : Promise<ProductType> => {
//   try {
//     const response = await fetch(`https://fakestoreapi.noksha.dev/api/products`)
//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Failed to fetch product data";
//     console.error(message);
//     throw error instanceof Error ? error : new Error(message)
//   }
// }