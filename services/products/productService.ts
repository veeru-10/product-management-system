import { ProductsApiResponse, ProductType } from "@/types/type";

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch("https://fakestoreapi.noksha.dev/api/products");
    if (!response.ok) {
      throw new Error("Invalid Api");
    }
    const responseData : ProductsApiResponse = await response.json();
    return responseData.data;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch user data";
    console.error(message);
    throw error instanceof Error ? error : new Error(message);
  }
};

// export const getProductById = async(id : number) : Promise<ProductType> => {
//   try {
//     const response = await fetch(`https://fakestoreapi.noksha.dev/api/products`)
//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Failed to fetch product data";
//     console.error(message);
//     throw error instanceof Error ? error : new Error(message)
//   }
// }