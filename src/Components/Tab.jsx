import React from 'react';

const Tab = ({ activeTab, setActiveTab }) => {
  console.log(activeTab)
  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
      <p className="text-sm text-gray-600">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>

      <div className="tabs tabs-box bg-transparent w-max mx-auto">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-3xl w-25"
          aria-label="Products"
          onClick={() => setActiveTab('Products')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-3xl w-25"
          aria-label="Cart"
          onClick={() => setActiveTab('Cart')}
        />
      </div>
    </div>
  );
};

export default Tab;
