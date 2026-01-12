
import React, { useState } from 'react';
import { AppView } from './types';
import Header from './components/Header';
import Home from './components/Home';
import CommunicationCenter from './components/CommunicationCenter';
import VideoConsult from './components/VideoConsult';
import MediaUpload from './components/MediaUpload';
import FooterNavigation from './components/FooterNavigation';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case AppView.COMMUNICATION:
        return <CommunicationCenter />;
      case AppView.VIDEO_CONSULT:
        return <VideoConsult />;
      case AppView.UPLOAD:
        return <MediaUpload />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 max-w-2xl mx-auto shadow-[0_0_100px_rgba(0,0,0,0.05)] relative overflow-x-hidden ring-1 ring-slate-100">
      
      {/* HIPAA Non-Compliance Warning - Fancy Banner */}
      <div className="bg-amber-500 text-white px-6 py-2.5 text-center text-[10px] leading-tight font-black z-[60] sticky top-0 shadow-lg flex items-center justify-center space-x-2">
        <i className="fa-solid fa-circle-exclamation text-amber-200 animate-pulse"></i>
        <span className="uppercase tracking-[0.05em]">
          TEST ENVIRONMENT: NO HIPAA COMPLIANCE • DATA NOT SECURED • RIGHTS WAIVED
        </span>
      </div>

      {/* Global Watermark Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] flex flex-wrap content-start justify-start overflow-hidden select-none rotate-[-30deg] scale-150 origin-center">
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className="text-2xl font-black uppercase tracking-[0.2em] p-12 whitespace-nowrap">
            test testing test testing testing
          </span>
        ))}
      </div>

      <Header />
      
      <main className="flex-1 overflow-y-auto px-6 py-8 relative z-10">
        <div className="max-w-xl mx-auto">
          {renderView()}
        </div>
      </main>

      <FooterNavigation currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
