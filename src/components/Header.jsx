import React from "react";

const Header = () => {
  return (
    <header className="w-full">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="AI Agent"
              className="w-6 h-6 rounded-full"
            />
            <span>
              <strong>Introducing</strong> AI Calling Agent! AI calls and shortlists
              applicants 24/7 — Enjoy 25% off, launch offer live!
            </span>
          </div>

          <button className="bg-white text-slate-900 px-4 py-1 rounded-full font-semibold text-sm hover:bg-slate-100">
            Know more →
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-gradient-to-r from-[#081C3A] to-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-black font-bold px-2 py-1 rounded">
                apna
              </div>
            </div>

            {/* MENU */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
                Product <span>▾</span>
              </li>
              <li className="cursor-pointer hover:text-gray-300">Enterprise</li>
              <li className="cursor-pointer hover:text-gray-300">Blogs</li>
              <li className="cursor-pointer hover:text-gray-300">Pricing</li>
              <li className="cursor-pointer hover:text-gray-300 flex items-center gap-1">
                Looking for a job <span>↗</span>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition">
              Contact us
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg font-semibold transition">
              Login/Sign up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
