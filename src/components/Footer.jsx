import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2C1E2F] to-[#241726] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-14">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-black font-bold px-2 py-1 rounded">
                apna
              </div>
            </div>

            <div className="flex gap-4 text-gray-300 mt-4">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Job posting</li>
              <li className="hover:text-white cursor-pointer">Contests</li>
              <li className="hover:text-white cursor-pointer">Database</li>
              <li className="hover:text-white cursor-pointer">Enterprise</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">
              Get to know us
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact support</li>
              <li className="hover:text-white cursor-pointer">Contact sales</li>
              <li className="hover:text-white cursor-pointer">Job seekers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Apna help center</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 py-6 gap-4">
          <p>© 2025 Apna | All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of service
            </span>
            <span className="hover:text-white cursor-pointer">
              Disclosure Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
