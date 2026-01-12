
import React from 'react';
import { AppView } from '../types';
import { PRACTICE_INFO } from '../constants';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Hero */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Hello!</h2>
          <p className="text-blue-50 opacity-90 text-sm leading-relaxed max-w-[80%]">
            Welcome to the Kensington Pediatrics portal. We're here to provide the best care for your children.
          </p>
          <div className="mt-4 flex space-x-3">
            <button 
              onClick={() => onNavigate(AppView.VIDEO_CONSULT)}
              className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-blue-50 transition-all"
            >
              Start Video Care
            </button>
          </div>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
          <i className="fa-solid fa-shield-cat text-9xl"></i>
        </div>
      </section>

      {/* Main Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        <ActionCard 
          icon="fa-message" 
          title="Contact Us" 
          color="bg-teal-50" 
          iconColor="text-teal-600"
          onClick={() => onNavigate(AppView.COMMUNICATION)}
        />
        <ActionCard 
          icon="fa-camera" 
          title="Send Media" 
          color="bg-rose-50" 
          iconColor="text-rose-600"
          onClick={() => onNavigate(AppView.UPLOAD)}
        />
        <ActionCard 
          icon="fa-phone-volume" 
          title="Request Callback" 
          color="bg-amber-50" 
          iconColor="text-amber-600"
          onClick={() => onNavigate(AppView.CALLBACK)}
        />
        <ActionCard 
          icon="fa-video" 
          title="Video Visit" 
          color="bg-indigo-50" 
          iconColor="text-indigo-600"
          onClick={() => onNavigate(AppView.VIDEO_CONSULT)}
        />
      </div>

      {/* Quick Links / Important Info */}
      <section className="bg-white rounded-2xl p-5 border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-3 flex items-center">
          <i className="fa-solid fa-circle-info text-blue-500 mr-2"></i>
          Emergency Contact
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          For urgent medical concerns, please call our main office immediately.
        </p>
        <a 
          href={`tel:${PRACTICE_INFO.practicePhone}`}
          className="flex items-center justify-between bg-slate-50 p-4 rounded-xl hover:bg-slate-100 transition-all group"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mr-3">
              <i className="fa-solid fa-phone text-blue-500"></i>
            </div>
            <span className="font-bold text-slate-700">{PRACTICE_INFO.practicePhone}</span>
          </div>
          <i className="fa-solid fa-chevron-right text-slate-400 group-hover:translate-x-1 transition-transform"></i>
        </a>
      </section>
    </div>
  );
};

interface ActionCardProps {
  icon: string;
  title: string;
  color: string;
  iconColor: string;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, color, iconColor, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} p-6 rounded-3xl flex flex-col items-center justify-center space-y-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white shadow-sm`}
  >
    <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm ${iconColor}`}>
      <i className={`fa-solid ${icon} text-xl`}></i>
    </div>
    <span className="font-bold text-slate-700 text-sm">{title}</span>
  </button>
);

export default Home;
