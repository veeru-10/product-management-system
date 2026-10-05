"use client";

import { ProductType } from "@/types/type";
import { useRouter } from "next/navigation";// router vs navigator
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart/cartSlice";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const dispath = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === product.id);

  
  return (
    <div className="bg-white/10 p-2 rounded-md">
      <div className="h-50 flex items-center justify-center bg-white/5 rounded-xl">
        <div className="size-10 bg-black p-8 rounded-full flex items-center justify-center">
          <p>image</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-3 px-2">
        <h2 className="font-bold">{product.title}</h2>
        <p className="text-amber-600/70">{product.category}</p>
        <p className="text-sm text-green-700">₹{product.price}</p>
        <div className="flex gap-6">
          <button 
          className="px-4 py-2 border border-green-600/50 bg-green-500/5 rounded-xl cursor-pointer"
          onClick={isInCart ? () => router.push('/cart') : () => dispath(addToCart(product))}
          >{isInCart ? "View cart" : "Add To Cart"}</button>
          <button 
          type="button"
          className="px-4 py-2 border border-white/50 bg-white/10 rounded-xl cursor-pointer"
          onClick={() => router.push(`/${product.id}`)}
          >View more deatils</button>
        </div>
      </div>
    </div>
  );
}