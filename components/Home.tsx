
import React from 'react';
import { AppView } from '../types';
import { PRACTICE_INFO } from '../constants';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Hero - Fancy Version */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full -ml-20 -mb-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Portal Active</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight font-quicksand">
              Hello, <br/><span className="text-blue-400">Welcome Back!</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Exceptional pediatric care for your little ones, right at your fingertips.
            </p>
            <div className="flex justify-center md:justify-start pt-2">
              <button 
                onClick={() => onNavigate(AppView.VIDEO_CONSULT)}
                className="shimmer bg-white text-slate-900 px-6 py-3 rounded-2xl text-sm font-bold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center group"
              >
                Start Quick Visit
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
          
          <div className="hidden sm:flex relative animate-float">
            <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 p-4">
              <div className="w-full h-full bg-blue-500/20 rounded-full flex items-center justify-center">
                 <i className="fa-solid fa-stethoscope text-5xl text-blue-300 opacity-60"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fancy Action Grid */}
      <div className="grid grid-cols-2 gap-5">
        <ActionCard 
          icon="fa-comments-medical" 
          title="Messenger" 
          desc="Chat with care team"
          color="from-emerald-400 to-teal-500" 
          onClick={() => onNavigate(AppView.COMMUNICATION)}
        />
        <ActionCard 
          icon="fa-images" 
          title="Symptoms" 
          desc="Send photos/videos"
          color="from-rose-400 to-pink-500" 
          onClick={() => onNavigate(AppView.UPLOAD)}
        />
        <ActionCard 
          icon="fa-video" 
          title="Telehealth" 
          desc="See a doctor now"
          color="from-indigo-400 to-blue-600" 
          onClick={() => onNavigate(AppView.VIDEO_CONSULT)}
          className="col-span-2"
        />
      </div>

      {/* Emergency Strip */}
      <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm relative group overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
           <i className="fa-solid fa-kit-medical text-6xl"></i>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shadow-inner">
            <i className="fa-solid fa-heart-pulse text-xl"></i>
          </div>
          <div>
            <h3 className="font-extrabold text-slate-800 font-quicksand">Urgent Care</h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Emergency Response</p>
          </div>
        </div>
        
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          If your child has an emergency, please use our priority phone line below for immediate attention.
        </p>
        
        <a 
          href={`tel:${PRACTICE_INFO.practicePhone}`}
          className="flex items-center justify-between bg-slate-900 text-white p-5 rounded-[1.5rem] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4">
              <i className="fa-solid fa-phone-volume text-white"></i>
            </div>
            <div>
              <span className="block text-[10px] text-white/50 font-bold uppercase tracking-widest">Priority Number</span>
              <span className="font-black text-lg tracking-tight">{PRACTICE_INFO.practicePhone}</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-500 transition-colors">
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </div>
        </a>
      </section>
    </div>
  );
};

interface ActionCardProps {
  icon: string;
  title: string;
  desc: string;
  color: string;
  onClick: () => void;
  className?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, desc, color, onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`relative group bg-white p-1 rounded-[2.2rem] transition-all transform hover:-translate-y-1 active:scale-[0.98] shadow-sm hover:shadow-xl ${className}`}
  >
    <div className="bg-white rounded-[2.1rem] p-5 flex flex-col items-start h-full space-y-4 overflow-hidden border border-slate-50">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
        <i className={`fa-solid ${icon} text-lg`}></i>
      </div>
      <div className="text-left">
        <h4 className="font-extrabold text-slate-800 text-sm font-quicksand mb-1">{title}</h4>
        <p className="text-[10px] text-slate-400 font-medium leading-tight">{desc}</p>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <i className="fa-solid fa-circle-plus text-slate-200 text-xl"></i>
      </div>
    </div>
  </button>
);

export default Home;
