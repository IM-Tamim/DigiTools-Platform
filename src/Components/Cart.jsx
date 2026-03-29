import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const handelProceedToCheckout = () => {
    setCart([]);
    toast.success("Payment Complete! Thank you for your purchase.")
  }
  const handelRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.warning("Item removed from cart.");
  }

  if (cart.length === 0) {
    return (
      <div className="bg-base-100 border border-gray-200 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto my-4 text-center">
        <h2 className="text-xl font-bold text-base-content mb-2">Your cart is empty</h2>
        <p className="text-gray-500">Add items to your cart to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border border-gray-200 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto my-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-base-content">Your Cart</h2>

      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-base-200 rounded-xl px-4 py-3"
          >
            <img src={item.icon} alt={item.name} className="w-10 h-10" />

            <div className="flex flex-col flex-1">
              <span className="font-semibold">{item.name}</span>
              <span className="text-sm text-gray-500">${item.price}</span>
            </div>

            <button
              onClick={() => handelRemoveItem(item.id)}
              className="text-red-500 text-sm font-medium hover:text-red-900 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-lg text-gray-500">Total:</span>
        <span className="text-2xl font-bold">${total}</span>
      </div>

      <button 
        onClick={handelProceedToCheckout} 
        className="btn btn-primary bg-linear-to-r from-blue-500 to-purple-600 w-full rounded-full text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;