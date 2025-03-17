import React from "react";

const Contacts = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-start bg-neutral-900 text-white p-8 rounded-3xl border-0.1 w-full overflow-y-auto">
      <div>
        <h2 className="text-3xl font-small text-yellow-400 mt-5 selection:bg-yellow-500 selection:text-black">
          Contacts
        </h2>
        <div className="w-[50px] h-[1px] border-[1.5px] border-yellow-400 mt-3 rounded-2xl md:mt-4 mb-8"></div>
      </div>

      <div className="w-full flex flex-col bg-neutral-900 text-white">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 selection:bg-yellow-500 selection:text-black">
          Message Me
        </h2>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              className="flex-1 h-12 border border-neutral-700 px-4 rounded-2xl bg-black text-white placeholder-gray-400 focus:outline-none"
              placeholder="Full Name"
            />
            <input
              className="flex-1 h-12 border border-neutral-700 px-4 rounded-2xl bg-black text-white placeholder-gray-400 focus:outline-none"
              placeholder="Email Address"
            />
          </div>

          <textarea
            className="w-full h-50 border border-neutral-700 mt-4 rounded-2xl p-4 text-white placeholder-gray-400 bg-black focus:outline-none overflow-y-auto scrollbar-hidden"
            placeholder="Your Message"
          ></textarea>

          <button className="w-full mt-5 h-12 bg-yellow-500 text-black font-bold rounded-2xl hover:bg-yellow-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;