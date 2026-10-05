import products from "@/data/products"
import ViewProduct from "@/components/ViewProduct";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProductPageParams  {
  params : Promise<{id : string}>
}
export default async function ProductPage({params} : ProductPageParams) {
  const { id } = await params 
  const requiredProduct = products.find(product => product.id === id);

  if(!requiredProduct) {
    notFound(); // built in function
  }
  return(
    <>
      <div className="mx-10">
        <h1 className="text-2xl md:text-4xl my-6">Product Deatils</h1>
        <ViewProduct product={requiredProduct} />
        <div className="mt-6 mx-auto">
          <Link className='px-4 py-2 rounded-xl border border-white/50 hover:border-white/80 transition-all duration-500' href="/">Return Home</Link>
        </div>
      </div>
    </>
  )
}