import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Rating from "./Components/Rating";
import Steps from "./Components/Steps";
import Tab from "./Components/Tab";
import Transform from "./Components/Transform";
import Footer from "./Components/Footer";
import { Suspense } from "react";
import Products from "./Components/Products";

const fetchPromise = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
function App() {
  const fetchProducts = fetchPromise();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tab></Tab>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Products fetchProducts={fetchProducts}></Products>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App;
