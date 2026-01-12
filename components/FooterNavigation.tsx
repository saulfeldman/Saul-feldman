
import React from 'react';
import { AppView } from '../types';

interface FooterNavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: AppView.HOME, icon: 'fa-house', label: 'Home' },
    { view: AppView.COMMUNICATION, icon: 'fa-comments', label: 'Contact' },
    { view: AppView.UPLOAD, icon: 'fa-cloud-arrow-up', label: 'Upload' },
    { view: AppView.VIDEO_CONSULT, icon: 'fa-video', label: 'Video' }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white/80 backdrop-blur-xl border-t border-slate-100 flex justify-around items-center px-4 py-3 z-50">
      {navItems.map((item) => (
        <button
          key={item.view}
          onClick={() => onNavigate(item.view)}
          className={`flex flex-col items-center space-y-1 px-3 py-1 rounded-2xl transition-all ${
            currentView === item.view 
              ? 'text-blue-500' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            currentView === item.view ? 'bg-blue-100' : 'bg-transparent'
          }`}>
            <i className={`fa-solid ${item.icon} text-lg`}></i>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${
            currentView === item.view ? 'opacity-100' : 'opacity-60'
          }`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default FooterNavigation;
