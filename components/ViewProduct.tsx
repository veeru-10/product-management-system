"use client"
import { useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { addToCart } from "@/store/slices/cartSlice/cart.slice"
import Image from "next/image"


export default function ViewProduct({id} : {id : string}) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const productItems = useAppSelector(state => state.product.productItems);
  const product = productItems.find(product => product._id === Number(id))
  if(!product) return <div>Product Not found</div>
  const isInCart = cartItems.some((item) => item._id === product._id); // it return a boolean value
  return (
    <div className="bg-white/10 p-2 rounded-md md:flex md:gap-6">
      <div className="w-full aspect-square overflow-hidden flex items-center justify-center bg-white/5 rounded-xl">
      <Image src={product.image} alt={product.title} width={200} height={200} className="h-full w-full object-cover"/>
        {/* <div className="size-10 bg-black p-8 rounded-full flex items-center justify-center">
          <p>image</p>
        </div> */}
      </div>
      <div className="flex flex-col gap-4 my-3">
        <h2 className="font-bold">{product.title}</h2>
        <p className="text-amber-600/70">{product.category}</p>
        <p className="text-sm text-green-700">${product.price}</p>
        <p className="text-gray-400">{product.description}</p>
        <div className="flex gap-6">
          <button 
          className="px-4 py-2 border border-green-600/50 bg-green-500/5 rounded-xl cursor-pointer"
          onClick={isInCart ? () => router.push("/cart") : () => dispatch(addToCart(product))}>{isInCart ? "View Cart" : "Add To Cart"}</button>
          {/* <button 
          type="button"
          className="px-4 py-2 border border-blue-500/40 bg-blue-600/5 rounded-xl cursor-pointer"
          >update Product</button> */}
        </div>
      </div>
    </div>
  )
}
