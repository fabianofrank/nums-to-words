import React from 'react';
import '../index.css';

const Converter = () => (
  <section className="flex flex-col items-center justify-center h-screen w-full min-w-[360px] p-30">
    <div className="text-center pb-24">
      <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans">TRANSFORMS</h2>
      <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">NUMBERS</h2>
      <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans ">INTO</h2>
      <h2 className="text-7xl text-left self-start text-[#cececf] font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900">WORDS</h2>
    </div>
    <input className="pt-24 ml-14 max-w-[500px] active:text-start text-5xl focus:placeholder-transparent text-purple-200 bg-transparent outline-none" id="number" placeholder="please enter a number" />
  </section>
);

export default Converter;
