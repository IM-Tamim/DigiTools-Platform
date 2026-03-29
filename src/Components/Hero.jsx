import React from "react";
import bannerImg from "../assets/banner.png";
import dotImg from "../assets/dot.png";
import playButtonImg from "../assets/Play.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-11/12 mx-auto max-w-300 my-15">
      <div>
        <div className="flex gap-2 items-center bg-[#E1E7FF] rounded-3xl px-4 py-2 mb-4 w-max my-5">
          <img src={dotImg} alt="Dot" />
          <p>New: AI-Powered Tools Available</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-5 max-w-lg">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 mb-6 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-2">
          <button className="btn text-white rounded-3xl bg-linear-to-r from-blue-600 to-purple-600">Explore Products</button>
          <button className="btn rounded-3xl border-purple-600"> <img src={playButtonImg} alt="Play" />Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Hero;
