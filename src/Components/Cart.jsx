import React from "react";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
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
              onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
              className="text-red-500 text-sm font-medium hover:text-red-900 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-lg text-gray-500">Total:</span>
        <span className="text-2xl font-bold">
          ${total}
        </span>
      </div>

      <button className="btn btn-primary bg-linear-to-r from-blue-500 to-purple-600 w-full rounded-full text-white">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
