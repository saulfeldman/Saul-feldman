
import React from 'react';
import { AppView } from '../types';

interface FooterNavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: AppView.HOME, icon: 'fa-house', label: 'Home' },
    { view: AppView.COMMUNICATION, icon: 'fa-comment-dots', label: 'Chat' },
    { view: AppView.UPLOAD, icon: 'fa-camera', label: 'Media' },
    { view: AppView.VIDEO_CONSULT, icon: 'fa-video', label: 'Clinic' }
  ];

  return (
    <div className="sticky bottom-6 left-0 right-0 px-6 pb-6 z-50 mt-auto pointer-events-none">
      <nav className="glass rounded-[2rem] flex justify-between items-center px-2 py-2 shadow-2xl border border-white/40 ring-1 ring-black/[0.03] max-w-md mx-auto pointer-events-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`relative flex flex-col items-center flex-1 py-1 transition-all duration-300 ${
                isActive ? 'text-blue-600 translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40' 
                  : 'bg-transparent hover:bg-slate-50'
              }`}>
                <i className={`fa-solid ${item.icon} ${isActive ? 'text-lg' : 'text-xl'}`}></i>
              </div>
              <span className={`text-[8px] font-black uppercase tracking-[0.1em] mt-1.5 transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0 scale-75'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default FooterNavigation;
