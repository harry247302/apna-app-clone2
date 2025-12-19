import React from "react";

const Section5 = () => {
  return (
    <section className="bg-[#2B1F2F] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Enterprise team"
            className="rounded-2xl w-full"
          />

         <div className="absolute top-10 left-6 bg-white text-black rounded-lg px-4 py-2 text-sm shadow">
             View <br /> Org hiring reports
          </div>

          <div className="absolute bottom-10 right-6 bg-white text-black rounded-lg px-4 py-2 text-sm shadow">
             Do this <br /> Configure usage limits
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-gray-300 mb-3">
            APNA ENTERPRISE
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Performance and productivity for every level of your enterprise
          </h2>

          <p className="text-gray-300 max-w-lg mb-8">
            Unleash your full potential with tailor-made Enterprise graded
            features that help you stay secure, compliant, and on brand.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg">
              Contact sales
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-white/10">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
