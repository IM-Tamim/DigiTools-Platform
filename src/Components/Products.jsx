import React, { use } from "react";
import Product from "./Product";

const Products = ({ fetchProducts, cart, setCart }) => {
  const products = use(fetchProducts);


  return (
    <div className="max-w-300 mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}></Product>
      ))}
    </div>
  );
};

export default Products;
