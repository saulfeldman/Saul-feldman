
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md px-6 py-6 flex flex-col items-center justify-center border-b border-slate-100 sticky top-0 z-50 text-center">
      {/* Decorative Icon */}
      <div className="relative mb-3">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[1.4rem] flex items-center justify-center shadow-lg shadow-blue-500/20 animate-float">
          <i className="fa-solid fa-baby-carriage text-white text-3xl"></i>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
      </div>

      {/* Practice Name */}
      <h1 className="font-black text-2xl text-slate-800 leading-none tracking-tight font-quicksand">
        Kensington Pediatrics
      </h1>

      {/* Doctors' Names */}
      <div className="mt-2 flex flex-col items-center space-y-0.5">
        <p className="text-sm font-bold text-slate-600 tracking-wide">
          Max Bulmash, MD &nbsp;&bull;&nbsp; Saul Feldman, MD
        </p>
        <div className="inline-flex items-center space-x-2 mt-1">
           <span className="text-[9px] font-extrabold text-blue-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
             Compassionate Care Since 1994
           </span>
        </div>
      </div>
      
      {/* Subtle Website Link Positioning */}
      <div className="absolute top-6 right-6">
        <a 
          href={PRACTICE_INFO.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-all border border-slate-100 shadow-sm"
          title="Visit Website"
        >
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
