"use client";

import { useState, useEffect } from "react";
// import type { ProductType } from "@/types/type";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/products/productsSlice";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const productItems = useAppSelector(state => state.product.productItems);

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  const [search, setSearch] = useState<string>("");
  const filteredProducts = productItems.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} /> 
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </>
  );
}