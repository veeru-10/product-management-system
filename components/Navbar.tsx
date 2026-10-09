"use client";
import { FaCartPlus } from "react-icons/fa6";
import Link from "next/link";
import { NavbarProps } from '@/types/type'
import { useAppSelector } from "@/store/hooks";
export default function Navbar({ search, onSearchChange, onClickLogout }: NavbarProps) {
  const cartCount = useAppSelector(state => state.cart.cartCount)
  return (
    <nav className='flex mb-4 px-4 items-center'>
      <h1 className='font-bold text-xl md:text-2xl'>
        <span className='md:hidden'>PMS</span>
        <span className='hidden md:inline'>Product Management <span className='text-amber-600'>system</span></span>
      </h1>
      <div className='flex-1 justify-end flex items-center gap-4'>
        <input
        type="search"
        className='px-4 py-2 border border-black/10 shadow outline-none rounded-full '
        placeholder="Search products.."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <Link href="/chart"><p className="text-slate-600 font-bold">chart</p></Link>
      <button 
      className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
      onClick={onClickLogout}>Logout</button>
      <Link href="/cart" className="relative inline-block cursor-pointer">
        <div>
          <FaCartPlus size={25}/>
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white ring-1 ring-white">
            {cartCount}
          </span>
        </div>
      </Link>
      </div>
    </nav>
  );
}