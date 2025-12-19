import React from "react";
import img1 from '../assets/Zomato-logo.png';
import imp2 from '../assets/cc1574e6b15ed8aa8a7759c2c9220429.jpg';
import img3 from '../assets/images.jpeg';
const logos = [
  {
    name: "Zomato",
    src: img1,
  },
  {
    name: "Aditya Birla",
    src: imp2,
  },
  {
    name: "Jio",
    src: img3,
  },
  {
    name: "Shoppers Stop",
    src: img1,
  },
  {
    name: "Tech Mahindra",
    src: imp2,
  },
  {
    name: "Teleperformance",
    src: img3,
  },
];

const Section = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-sm text-slate-600 mb-6">
          Trusted by <span className="font-semibold">1000+</span> enterprises and
          <span className="font-semibold"> 7 lakhs+</span> MSMEs for hiring
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-10">
          A single platform for your hiring needs
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-14">
            {/* FIRST SET */}
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}

            {/* DUPLICATE SET (for infinite loop) */}
            {logos.map((logo, i) => (
              <img
                key={`dup-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
