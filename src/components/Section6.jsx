import React from "react";
import img from '../assets/MApWYAuheO5KcMut8XAPpN1Orlg.avif'; 
const Section6 = () => {
  return (
    <section className="bg-[#EFE3FF] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs font-semibold text-purple-600 uppercase mb-2">
            Introducing
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The India Gen Z Talent <br /> Playbook 2025
          </h2>

          <p className="text-slate-700 max-w-md mb-6">
            Insights from 140+ People & Talent Leaders on hiring, engaging,
            and retaining India’s largest workforce generation
          </p>

          <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold ">
            Download playbook
          </button>
        </div>

        {/* RIGHT BOOK MOCKUP */}
        <div className="relative flex justify-center">
          <img
            src={img}
            alt="Gen Z Playbook"
            className="rounded-xl "
          />

          {/* Decorative shapes */}
          <div className="absolute -top-6 left-6 w-10 h-10 bg-purple-300 rounded-full opacity-70" />
          <div className="absolute -bottom-6 right-10 w-10 h-10 bg-yellow-300 rounded-full opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
