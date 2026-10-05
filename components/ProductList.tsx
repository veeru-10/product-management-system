"use client";

import { useState } from "react";
import type { ProductType } from "@/types/type";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function ProductList({ products }: { products: ProductType[] }) {

  const [search, setSearch] = useState<string>("");
  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} /> 
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </section>
    </>
  );
}