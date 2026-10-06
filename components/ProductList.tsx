"use client";

import { useState, useEffect } from "react";
// import type { ProductType } from "@/types/type";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProductsByService } from "@/store/services/products/product.service";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const {productItems, loading, error} = useAppSelector(state => state.product);

  useEffect(()=>{
    dispatch(getProductsByService())
  }, [dispatch])

  const [search, setSearch] = useState<string>("");
  const filteredProducts = productItems.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())
  );

  if(loading) return <p className="mt-10">Loading data..</p>
  if(error) return <p className="text-red-500 text-center mt-10">{error}</p>
  
  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} /> 
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