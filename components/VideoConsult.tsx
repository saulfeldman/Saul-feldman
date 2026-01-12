
import React, { useState, useRef, useEffect } from 'react';

const VideoConsult: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startConsultation = async () => {
    setIsConnecting(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      // Simulate connection time
      setTimeout(() => {
        setIsConnecting(false);
        setIsActive(true);
      }, 2000);
    } catch (err) {
      console.error("Error accessing camera/microphone:", err);
      setIsConnecting(false);
      alert("Could not access camera or microphone. Please check your permissions.");
    }
  };

  const endConsultation = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
    setIsActive(false);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  if (!isActive) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4 animate-pulse">
          <i className="fa-solid fa-video text-4xl"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Telehealth Visit</h2>
          <p className="text-slate-500 max-w-xs mt-2 text-sm leading-relaxed">
            Connect securely with our medical team from the comfort of your home.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-full">
          <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wider">Before you start:</h3>
          <ul className="text-left space-y-3 text-sm text-slate-600">
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mr-2 mt-1"></i>
              Ensure you have a stable internet connection.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mr-2 mt-1"></i>
              Find a quiet, well-lit space.
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mr-2 mt-1"></i>
              Have your child's recent symptoms ready.
            </li>
          </ul>
        </div>

        <button
          onClick={startConsultation}
          disabled={isConnecting}
          className="w-full bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          {isConnecting ? (
            <>
              <i className="fa-solid fa-circle-notch animate-spin"></i>
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-play"></i>
              <span>Start Secure Session</span>
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-[70vh] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover grayscale-0"
      />
      
      {/* Remote User Placeholder (Simulated Provider) */}
      <div className="absolute top-4 right-4 w-24 h-32 bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700 shadow-lg">
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500">
          <i className="fa-solid fa-user-doctor text-2xl mb-1"></i>
          <span className="text-[10px] font-bold">Connecting...</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 px-4">
        <button className="w-14 h-14 bg-slate-800/80 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-slate-700">
          <i className="fa-solid fa-microphone"></i>
        </button>
        <button 
          onClick={endConsultation}
          className="w-20 h-14 bg-rose-500 rounded-2xl text-white flex items-center justify-center hover:bg-rose-600 shadow-lg shadow-rose-500/30"
        >
          <i className="fa-solid fa-phone-slash text-xl"></i>
        </button>
        <button className="w-14 h-14 bg-slate-800/80 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-slate-700">
          <i className="fa-solid fa-video"></i>
        </button>
      </div>

      <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 border border-green-500/30">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Secure</span>
      </div>
    </div>
  );
};

export default VideoConsult;
