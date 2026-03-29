import React, { use } from "react";

const Tab = () => {
    // const [activeTab, setActiveTab] = useState("products");
  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
      <p className="text-sm text-gray-600">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className="tabs tabs-box bg-transparent shadow-none justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart(0)"
        />
      </div>
    </div>
  );
};

export default Tab;
