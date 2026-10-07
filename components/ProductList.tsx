"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProductsByService } from "@/store/services/products/product.service";
import { useRouter } from "next/navigation";
import { users } from "@/data/users";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const {productItems, loading, error} = useAppSelector(state => state.product);
  const router = useRouter()

  const handleLogout = () => {
    const isConfirmed = confirm("are you sure to logout");
    if(isConfirmed) {
      Cookies.remove('accessToken')
      Cookies.remove("refreshToken")
      router.push('/login')
    }
  }
  

  useEffect(()=>{

    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if(!accessToken || !refreshToken) {
      router.push('/login');
      return;
    }
    
    const validUser = users.find((user) => user.accessToken && user.refreshToken)
    if(!validUser) {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      router.push('/login');
      return;
    }
    try {
      dispatch(getProductsByService())
    } catch (error) {
      console.log("data fetching issue",error);
    }
  }, [dispatch, router])

  // useEffect(()=>{
  //   dispatch(getProductsByService())
  // }, [dispatch])

  const [search, setSearch] = useState<string>("");
  const filteredProducts = productItems.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())
  );

  if(loading) return <p className="mt-10">Loading data..</p>
  if(error) return <p className="text-red-500 text-center mt-10">{error}</p>
  
  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} onClickLogout={handleLogout}/> 
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 && (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </section>
    </>
  );
}