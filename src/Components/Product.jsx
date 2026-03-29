import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const Product = ({ product, cart, setCart }) => {
  const [isCarted, setIsCarted] = useState(false);
  const handleCartBtn = () => {
    setIsCarted(true);
    if (cart.find((item) => item.id === product.id)) {
        toast.error("Item is already in the cart!");
      return;
    }
    setCart([...cart, product]);
    toast.success("Item added to cart!");
  };
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl p-5 flex flex-col gap-4 relative">
      <div className="absolute top-4 right-4">
        <span
          className={`badge badge-sm font-medium px-3 py-2 rounded-full
            ${product.tagType === "best-seller" ? "bg-yellow-100 text-yellow-700 border-yellow-200" : ""}
            ${product.tagType === "popular" ? "bg-purple-100 text-purple-600 border-purple-200" : ""}
            ${product.tagType === "new" ? "bg-green-100 text-green-600 border-green-200" : ""}
          `}
        >
          {product.tag}
        </span>
      </div>

      <img src={product.icon} alt={product.name} className="w-12 h-12" />

      <div>
        <h3 className="text-lg font-bold text-base-content mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">${product.price}</span>
        <span className="text-sm text-gray-500">/{product.period}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <Check className="text-green-500"></Check>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleCartBtn}
        className={`btn w-full rounded-full transition-colors ${
          isCarted
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "btn-primary bg-linear-to-r from-blue-500 to-purple-600"
        }`}
      >
        {isCarted ? "Item Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;
