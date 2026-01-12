
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm">
          <i className="fa-solid fa-baby text-blue-500 text-2xl"></i>
        </div>
        <div>
          <h1 className="font-bold text-lg text-slate-800 leading-none">Kensington Pediatrics</h1>
          <div className="mt-1 flex flex-col text-[11px] text-slate-500 font-medium tracking-tight leading-none space-y-0.5">
            <span className="flex items-center">
              <span className="w-1 h-1 bg-blue-400 rounded-full mr-1.5"></span>
              Max Bulmash, MD
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 bg-blue-400 rounded-full mr-1.5"></span>
              Saul Feldman, MD
            </span>
          </div>
        </div>
      </div>
      <a 
        href={PRACTICE_INFO.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-blue-100 transition-all flex items-center shadow-sm border border-blue-100"
      >
        <i className="fa-solid fa-globe mr-1.5"></i> Website
      </a>
    </header>
  );
};

export default Header;
