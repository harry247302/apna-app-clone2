import React from "react";
import img from '../assets/SKwjdvyk21SuapNHT8flgJKLlvY.avif';
const Section3 = () => {
  return (
    <section className="bg-[#FFF9DB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE CARD */}
        <div className="bg-[#FFED99] rounded-2xl p-10 flex justify-center items-center relative overflow-hidden">
          <img
            src={img}
            alt="Trophy Illustration"
            className=""
          />

          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-yellow-300 opacity-40" />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border border-yellow-300 opacity-40" />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-orange-600 mb-3">
            🏆 APNA CAMPUSAI
          </p>

          <h2 className="text-4xl font-bold text-slate-900 leading-snug mb-6">
            Unlock opportunities, one <br />
            challenge at a time
          </h2>

          <div className="border-t border-slate-300 mb-6"></div>

          {/* ACCORDION ITEMS */}
          <div className="space-y-4">
            <div className="border-b border-slate-300 pb-4 flex justify-between items-center">
              <span className="font-semibold text-slate-900">
                Attract
              </span>
              <span className="text-xl">⌄</span>
            </div>

            <div className="border-b border-slate-300 pb-4">
              <div className="flex justify-between items-center font-semibold text-slate-900">
                Evaluate
                <span className="text-xl">⌃</span>
              </div>
              <p className="text-sm text-slate-700 mt-2 max-w-md">
                Assess candidates with tailored tests like MCQs & coding/case
                studies. Conduct interviews for deeper evaluation.
              </p>
            </div>

            <div className="border-b border-slate-300 pb-4 flex justify-between items-center">
              <span className="font-semibold text-slate-900">
                Hire
              </span>
              <span className="text-xl">⌄</span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-8 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold shadow transition">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
