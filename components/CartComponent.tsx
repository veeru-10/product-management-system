"use client";

import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/slices/cartSlice/cart.slice";

export default function CartComponent() {
  const dispatch = useAppDispatch();
  const  cartItems  = useAppSelector(state => state.cart.cartItems)
  const handleRemoveFromCart = (id : number) => {
    dispatch(removeFromCart(id))
  }
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold">Your cart</h1>
      {cartItems.length === 0 ? (
        <div className="space-y-4">
          <p>Your cart is empty.</p>
          <Link href="/dashboard" className="inline-block text-green-700 underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between gap-4 py-4">
              <div className="flex flex-col space-y-3">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-green-700">${item.price}</p>
                <p className="text-sm text-black/40">{item.description}</p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-md border border-red-600/40 px-3 py-2 text-sm text-red-700 cursor-pointer"
                onClick={() => handleRemoveFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}