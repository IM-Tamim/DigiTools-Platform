import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Rating from "./Components/Rating";
import Steps from "./Components/Steps";
import Tab from "./Components/Tab";
import Transform from "./Components/Transform";
import Footer from "./Components/Footer";
import { Suspense, useState } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { ToastContainer} from 'react-toastify';

const fetchPromise = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
function App() {
  const fetchProducts = fetchPromise();

  const [activeTab, setActiveTab] = useState("Products");
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab}></Tab>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        {activeTab === "Products" ? (
          <Products fetchProducts={fetchProducts} cart={cart} setCart={setCart}></Products>
        ) : (
          <Cart cart={cart} setCart={setCart}></Cart>
        )}
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
