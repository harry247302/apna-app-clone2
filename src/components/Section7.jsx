import React, { useState } from "react";
import img from '../assets/cSUju5MxZeUzt0ZOtmf18dZmKwA.avif';
const faqs = [
  {
    q: "Why should I use Apna over others?",
    a: "Apna provides faster access to verified, job-ready candidates across multiple job categories with higher response rates."
  },
  {
    q: "What happens if I don't receive enough candidates?",
    a: "Our team actively boosts visibility and suggests optimizations to ensure you receive enough qualified candidates."
  },
  {
    q: "In which cities can I hire via Apna?",
    a: "Apna supports hiring across 100+ cities in India including Tier 1, 2, and 3 cities."
  },
  {
    q: "I want to hire more than 10 candidates, do you have bulk-hiring plans?",
    a: "Yes, Apna offers flexible bulk and enterprise hiring plans tailored to your needs."
  }
];

const Section7 = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Why hire from apna?
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            From startups to SMEs to established enterprises, Apna revolutionizes
            the way businesses find high-quality talent quickly & effortlessly.
          </p>
        </div>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center mb-20">
          {[
            ["5 Lakhs+", "New candidates join apna every month."],
            ["200+", "Job categories to publish your job."],
            ["Upto 5X", "More walk-ins than competitors."],
            ["80%", "Businesses get qualified candidates within 24 hrs."]
          ].map(([title, desc], i) => (
            <div key={i} className="relative">
              {i !== 0 && (
                <div className="hidden md:block absolute -left-5 top-2 h-16 w-px bg-slate-300" />
              )}
              <h3 className="text-2xl font-bold text-emerald-600">
                {title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* TESTIMONIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-[#FFE6D6] rounded-xl p-6">
              <img
                src={img}
                alt="Dr Varun"
                className="rounded-lg w-72"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative">
            <p className="text-slate-800 leading-relaxed mb-6">
              We are closely working with apna for talent discovery and hiring
              across job families. Their quickest turn-around time is enabling
              us to uninterruptedly continue our daily functions and services,
              especially during the present times.
            </p>

            <div className="border-t border-dotted border-slate-300 my-6" />

            <p className="font-semibold text-slate-900">
              Dr Varun
            </p>
            <p className="text-sm text-slate-600 mb-2">
              SVP, Medical Affairs
            </p>

            <div className="font-bold text-slate-900">
              TATA 1mg
            </div>

           <button className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center">
              →
            </button>
          </div>
        </div>

       <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-8">
            Frequently asked questions
          </h3>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-slate-300 pb-4 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center font-medium text-slate-900">
                  {item.q}
                  <span className="text-xl">
                    {open === i ? "⌃" : "⌄"}
                  </span>
                </div>

                {open === i && (
                  <p className="mt-3 text-sm text-slate-600 max-w-3xl">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
