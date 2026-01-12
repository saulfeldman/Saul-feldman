
import React, { useState } from 'react';
import { UploadedFile } from '../types';

const MediaUpload: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    setIsUploading(true);
    setIsSent(false);

    // Simulate upload delay
    setTimeout(() => {
      const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file: File) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type.startsWith('video') ? 'video' : 'image',
        url: URL.createObjectURL(file),
        timestamp: new Date()
      }));

      setFiles(prev => [...newFiles, ...prev]);
      setIsUploading(false);
    }, 1500);
  };

  const handleSendToTeam = () => {
    setIsSending(true);
    // Simulate sending email to administrator@Kensingtonpediatrics.com
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFiles([]);
    }, 2000);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  if (isSent) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4 scale-110 shadow-lg shadow-green-100/50">
          <i className="fa-solid fa-envelope-circle-check text-4xl"></i>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-800">Media Sent Successfully</h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-600 text-sm leading-relaxed">
              Your media has been sent to <span className="font-bold text-blue-600">administrator@Kensingtonpediatrics.com</span>.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-50">
              <p className="text-amber-600 font-bold text-sm">
                <i className="fa-solid fa-calendar-day mr-2"></i>
                We will view this on the next business day.
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsSent(false)}
          className="text-blue-500 font-bold text-sm uppercase tracking-widest hover:underline pt-4"
        >
          Send more media
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Secure Media Portal</h2>
        <p className="text-slate-500 text-sm">Send photos of rashes or symptoms directly to our clinical team.</p>
      </div>

      <div className="relative">
        <input
          type="file"
          id="media-upload"
          className="hidden"
          multiple
          accept="image/*,video/*"
          onChange={handleFileUpload}
          disabled={isUploading || isSending}
        />
        <label
          htmlFor="media-upload"
          className={`w-full h-48 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all cursor-pointer ${
            isUploading 
              ? 'bg-slate-50 border-slate-200' 
              : 'bg-white border-blue-200 hover:border-blue-400 hover:bg-blue-50'
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center space-y-4">
              <i className="fa-solid fa-spinner animate-spin text-3xl text-blue-500"></i>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Uploading Securely...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-inner">
                <i className="fa-solid fa-cloud-arrow-up text-2xl"></i>
              </div>
              <div className="text-center px-6">
                <p className="font-bold text-slate-700">Tap to Upload</p>
                <p className="text-xs text-slate-400 mt-1">Photos or Videos (Max 50MB)</p>
              </div>
            </div>
          )}
        </label>
      </div>

      {files.length > 0 && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Queue ({files.length})</h3>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full flex items-center">
              <i className="fa-solid fa-lock mr-1"></i> Encrypted
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {files.map((file) => (
              <div key={file.id} className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm aspect-square">
                {file.type === 'image' ? (
                  <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <i className="fa-solid fa-video text-white/30 text-3xl"></i>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    disabled={isSending}
                    onClick={() => removeFile(file.id)}
                    className="w-10 h-10 bg-white rounded-full text-rose-500 hover:bg-rose-50 shadow-lg"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-sm rounded-md px-1.5 py-0.5 max-w-[70%] overflow-hidden">
                    <p className="text-[10px] text-white truncate font-medium">{file.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleSendToTeam}
            disabled={isSending}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            {isSending ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                <span>Sending to Team...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send to Medical Team</span>
              </>
            )}
          </button>
        </div>
      )}

      <div className="p-4 bg-slate-100 rounded-2xl flex items-center space-x-3">
        <i className="fa-solid fa-circle-info text-blue-500"></i>
        <div className="text-[11px] text-slate-500 leading-tight">
          <p className="font-bold text-slate-700 mb-0.5">Note on Response Times:</p>
          <p>Files are emailed securely. Our team will review your submission on the <strong>next business day</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;
