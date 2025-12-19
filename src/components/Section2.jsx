import React from "react";
import img from '../assets/ai-calling-agent-card.avif';
const Section2 = () => {
    return (
        <section className="bg-[#F6F1FF] py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

               
                <div>
                    <p className="text-sm font-semibold text-purple-600 flex items-center gap-2 mb-4">
                        APNA DATABASE
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900 leading-snug mb-8">
                        Quickly hire active jobseekers

                        <br />
                        around your office.

                    </h1>

                    <div className="space-y-5">
                        <div className="border-b border-purple-200 pb-4">
                            <div className="flex justify-between items-center font-semibold text-slate-900">
                                AI Powered Search
                                <span className="text-purple-500">
                                    {/* Instantly turn your job descriptions into candidate searches using apnaAI */}
                                </span>
                            </div>
                        </div>

                        <div className="border-b border-purple-200 pb-4">
                            <div className="flex justify-between items-center font-semibold text-slate-900">
                                Area-based Search
                                <span className="text-purple-500">⌃</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 max-w-md">

                            </p>
                        </div>

                        <div className="border-b border-purple-200 pb-4">
                            <div className="flex justify-between items-center font-semibold text-slate-900">
                                Bulk WhatsApp Invites
                                <span className="text-purple-500">⌄</span>
                            </div>
                        </div>
                    </div>

                    <button className="mt-10 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3 rounded-lg font-semibold shadow transition">
                        Search candidates
                    </button>
                </div>

                <div
                // className="relative rounded-3xl p-8 bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 shadow-2xl"
                >

                    <img src={img} alt="" />
                </div>
            </div>

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
                    <div className="text-purple-600 text-3xl mb-3"></div>
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

export default Section2;
