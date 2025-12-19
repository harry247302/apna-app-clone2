import React from "react";
import img from '../assets/ai-calling-agent-card.webp';
const Section1 = () => {
  return (
    <section className="bg-[#F6F1FF] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-purple-600 flex items-center gap-2 mb-4">
            🤖 JOB WITH AI CALLING AGENT
          </p>

          <h1 className="text-4xl font-bold text-slate-900 leading-snug mb-8">
            AI Calling Agent interviews and <br />
            shortlists candidates 24/7
          </h1>

          {/* ACCORDION */}
          <div className="space-y-5">
            <div className="border-b border-purple-200 pb-4">
              <div className="flex justify-between items-center font-semibold text-slate-900">
                Post a Premium job with AI Calling Agent
                <span className="text-purple-500">⌃</span>
              </div>
            </div>

            <div className="border-b border-purple-200 pb-4">
              <div className="flex justify-between items-center font-semibold text-slate-900">
                AI agent calls candidates on your behalf 24/7
                <span className="text-purple-500">⌃</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 max-w-md">
                Interviews all interested candidates. Follows up 5 times via call,
                WhatsApp & email even after work hours
              </p>
            </div>

            <div className="border-b border-purple-200 pb-4">
              <div className="flex justify-between items-center font-semibold text-slate-900">
                Gives you a ready shortlist of top candidates
                <span className="text-purple-500">⌄</span>
              </div>
            </div>
          </div>

          <button className="mt-10 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3 rounded-lg font-semibold shadow transition">
            Post a job now
          </button>
        </div>

        {/* RIGHT CARD */}
        <div 
        // className="relative rounded-3xl p-8 bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 shadow-2xl"
        >

          <img src={img} alt="" />
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <div className="text-purple-600 text-3xl mb-3">📞</div>
          <h4 className="font-semibold text-slate-900 mb-2">
            Inbound & Outbound AI Calling
          </h4>
          <p className="text-gray-600 text-sm">
            AI interviews all job applicants 24/7 & shortlists only the best candidates
          </p>
        </div>

        <div>
          <div className="text-purple-600 text-3xl mb-3">📊</div>
          <h4 className="font-semibold text-slate-900 mb-2">
            80% response rate with AI
          </h4>
          <p className="text-gray-600 text-sm">
            Compared to just 30% call connection rate in manual hiring
          </p>
        </div>

        <div>
          <div className="text-purple-600 text-3xl mb-3">⏳</div>
          <h4 className="font-semibold text-slate-900 mb-2">
            Reduce hiring time by 50%
          </h4>
          <p className="text-gray-600 text-sm">
            AI does initial screening & shortlisting so you can do final interviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
