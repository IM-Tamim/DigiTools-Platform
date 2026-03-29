import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        
        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-3">
          <h2 className="text-xl font-bold">DigiTools</h2>
          <p className="text-white/80 text-sm max-w-xs">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Templates</a>
            <a href="#" className="hover:text-white">Integrations</a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Press</a>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <a href="#" className="hover:text-white">Documentation</a>
            <a href="#" className="hover:text-white">Help Center</a>
            <a href="#" className="hover:text-white">Community</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-2">Social Links</h4>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-black rounded-full p-2 hover:opacity-80 transition-opacity">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/50">
          <span>© 2026 DigiTools. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;