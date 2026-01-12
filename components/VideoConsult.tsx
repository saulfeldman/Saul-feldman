
import React, { useState, useMemo } from 'react';
import { PRACTICE_INFO } from '../constants';

const VideoConsult: React.FC = () => {
  const [step, setStep] = useState<'info' | 'setup' | 'active'>('info');
  const [childName, setChildName] = useState('');
  
  // Generate a unique room name for security and privacy
  const roomName = useMemo(() => {
    const cleanName = childName.replace(/[^a-zA-Z0-9]/g, '');
    const randomId = Math.floor(1000 + Math.random() * 9000);
    return `KP-${cleanName || 'Patient'}-${randomId}`;
  }, [childName, step === 'setup']);

  const jitsiLink = `https://meet.jit.si/${roomName}`;

  // Pre-filled message for the doctor
  const alertMessage = `Kensington Pediatrics: ${childName || 'My child'} is ready for a video visit. Please join the secure room here: ${jitsiLink}`;

  const handleNotifyAndJoin = () => {
    // Open SMS app with pre-filled content to Dr. Feldman's hidden number
    // The number is pulled from constants but not displayed in the UI text
    window.location.href = `sms:${PRACTICE_INFO.drFeldmanText}?body=${encodeURIComponent(alertMessage)}`;
    setStep('active');
  };

  if (step === 'info') {
    return (
      <div className="h-full flex flex-col items-center space-y-6 text-center py-4 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-blue-500 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-100 rotate-3">
          <i className="fa-solid fa-video text-4xl"></i>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">Secure Video Room</h2>
          <p className="text-slate-500 max-w-xs mx-auto text-sm leading-relaxed">
            Instant, patient-initiated video visits. No app download or account required.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm w-full space-y-5">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 text-left">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <p className="text-sm text-slate-600">Enter your child's name to create a private room.</p>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <p className="text-sm text-slate-600">Alert Dr. Feldman via a pre-filled secure text message.</p>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <p className="text-sm text-slate-600">Enter the room and wait for the doctor to join you.</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep('setup')}
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          <span>Get Started</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    );
  }

  if (step === 'setup') {
    return (
      <div className="h-full flex flex-col space-y-6 py-4 animate-in slide-in-from-right-4 duration-300">
        <button onClick={() => setStep('info')} className="flex items-center text-slate-400 text-sm font-bold hover:text-slate-600 w-fit">
          <i className="fa-solid fa-chevron-left mr-2"></i> Back
        </button>
        
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-800">Identify Patient</h2>
          <p className="text-slate-500 text-sm">Please provide the name for the video chart.</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-wider">Child's Name</label>
            <input
              required
              type="text"
              value={childName}
              onChange={e => setChildName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
              placeholder="Full Name"
            />
          </div>

          <button
            onClick={handleNotifyAndJoin}
            disabled={!childName}
            className={`w-full font-bold py-4 rounded-2xl shadow-lg transition-all flex flex-col items-center justify-center ${
              childName ? 'bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-paper-plane"></i>
              <span>Notify Dr. Feldman & Join Room</span>
            </span>
          </button>
          
          <p className="text-[10px] text-center text-slate-400 font-medium px-4">
            Tapping this will open your messaging app to send a one-time notification to the doctor's secure line.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col space-y-6 py-4 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Waiting Room Active</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Virtual Clinic</h2>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mx-auto border-2 border-blue-100 shadow-inner">
            <i className="fa-solid fa-user-md text-3xl"></i>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-700 font-bold italic">"I've sent the alert to the doctor."</p>
            <p className="text-xs text-slate-500">Please enter your room and wait for Dr. Feldman.</p>
          </div>
          
          <a 
            href={jitsiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all text-center"
          >
            <i className="fa-solid fa-door-open mr-2"></i>
            Enter Video Room
          </a>
        </div>

        <div className="border-t border-slate-50 pt-6">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest text-center mb-4">Fallback Options</p>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleNotifyAndJoin}
              className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all space-y-2"
            >
              <i className="fa-solid fa-redo text-blue-400 text-lg"></i>
              <span className="text-[9px] font-bold text-slate-600 uppercase">Resend Alert</span>
            </button>
            <a 
              href={`https://wa.me/${PRACTICE_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(alertMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all space-y-2"
            >
              <i className="fa-brands fa-whatsapp text-green-500 text-lg"></i>
              <span className="text-[9px] font-bold text-slate-600 uppercase">Alert WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start space-x-3">
        <i className="fa-solid fa-lightbulb text-amber-500 mt-0.5"></i>
        <div className="text-[11px] text-amber-800 leading-tight">
          <p className="font-bold mb-0.5 underline">Doctor's Note:</p>
          <p>Please stay in the Jitsi room once you open it. If the doctor doesn't join within 5 minutes, please call the main office at {PRACTICE_INFO.practicePhone}.</p>
        </div>
      </div>

      <button 
        onClick={() => setStep('info')}
        className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-rose-500 transition-colors text-center w-full"
      >
        Exit Video Hub
      </button>
    </div>
  );
};

export default VideoConsult;
