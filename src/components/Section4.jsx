import React from "react";
import img from '../assets/RWdYTXswqQK36xD44FM7JuVM.svg';
const Section4 = () => {
  return (
    <section className="bg-[#E9FAF8] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-teal-700 mb-3">
            💬 WHATSAPP FAST RECRUIT
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Bulk WhatsApp sender for fast hiring
          </h2>

          <div className="border-t border-slate-300 mb-6"></div>

          <div className="space-y-4">
            <div className="border-b border-slate-300 pb-4">
              <div className="flex justify-between items-center font-semibold">
                Bulk communication with candidates
                <span>⌃</span>
              </div>
              <p className="text-sm text-slate-700 mt-2 max-w-md">
                Schedule walk-ins and send job details to 10k candidates monthly
                with a single click.
              </p>
            </div>

            <div className="border-b border-slate-300 pb-4 flex justify-between items-center font-semibold">
              Responses delivered to your inbox
              <span>⌄</span>
            </div>
          </div>

          <button className="mt-8 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold shadow">
            Install chrome extension
          </button>
        </div>

        {/* RIGHT MOCKUP */}
        <div 
        // className="relative bg-teal-700 rounded-2xl p-6 shadow-xl"
        >
         <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
