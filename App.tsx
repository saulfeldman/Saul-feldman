
import React, { useState } from 'react';
import { AppView } from './types';
import Header from './components/Header';
import Home from './components/Home';
import CommunicationCenter from './components/CommunicationCenter';
import VideoConsult from './components/VideoConsult';
import MediaUpload from './components/MediaUpload';
import CallbackRequest from './components/CallbackRequest';
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
      case AppView.CALLBACK:
        return <CallbackRequest />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pb-20 max-w-2xl mx-auto shadow-xl ring-1 ring-slate-200">
      <Header />
      
      <main className="flex-1 overflow-y-auto px-4 py-6">
        {renderView()}
      </main>

      <FooterNavigation currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
