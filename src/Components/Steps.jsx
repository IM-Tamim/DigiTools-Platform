import React from "react";
import userImg from "../assets/user.png";
import productImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="py-10 px-4 bg-gray-50 my-10">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center relative bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
              <img src={userImg} alt="Create Account" className="w-10 h-10" />
            </div>

            <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
              01
            </div>

            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="text-center relative bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
              <img
                src={productImg}
                alt="Choose Products"
                className="w-10 h-10"
              />
            </div>

            <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
              02
            </div>

            <h3 className="text-xl font-semibold mb-2">Choose Products</h3>
            <p className="text-gray-600">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="text-center relative bg-white rounded-lg shadow-md p-6">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
              <img src={rocketImg} alt="Start Creating" className="w-10 h-10" />
            </div>

            <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
              03
            </div>

            <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
            <p className="text-gray-600">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
