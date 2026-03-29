import React from "react";

const Transform = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4 text-center">
  <div className="max-w-xl mx-auto">
    
    <h2 className="text-4xl font-bold text-white mb-4">
      Ready To Transform Your Workflow?
    </h2>

    <p className="text-white/80 text-sm mb-10">
      Join thousands of professionals using DigiTools to work smarter.
      <br />
      Start your free trial today.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      
      <button className="rounded-3xl px-7 py-2.5 bg-white text-black font-semibold hover:bg-gray-200 transition">
        Explore Products
      </button>

      <button className="rounded-3xl px-7 py-2.5 border border-white text-white font-semibold hover:bg-white/10 transition">
        View Pricing
      </button>

    </div>

    <p className="mt-6 text-white/70 text-xs">
      14-day free trial · No credit card required · Cancel anytime
    </p>

  </div>
</section>
  );
};

export default Transform;
