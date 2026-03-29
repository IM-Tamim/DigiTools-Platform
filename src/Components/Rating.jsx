import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-purple-600 py-15 mx-auto text-white mb-15">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center flex-1">
            <div className="text-4xl font-bold">50K+</div>
            <div className="text-gray-100 mt-1">Active Users</div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300"></div>

          <div className="text-center flex-1">
            <div className="text-4xl font-bold">200+</div>
            <div className="text-gray-100 mt-1">Premium Tools</div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300"></div>

          <div className="text-center flex-1">
            <div className="text-4xl font-bold">4.9</div>
            <div className="text-gray-100 mt-1">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
