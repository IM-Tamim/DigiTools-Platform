import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Rating from "./Components/Rating";
import Steps from "./Components/Steps";
import Tab from "./Components/Tab";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Tab></Tab>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App;
