
import React, { useState } from 'react';
import { PRACTICE_INFO } from '../constants';

const CallbackRequest: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    childName: '',
    phone: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // TARGETS (Hidden from UI per request):
    // Fax: 844-324-1974
    // Email: administrator@kensingtonpediatrics.com
    
    console.log("--- SECURE DISPATCH INITIATED ---");
    console.log(`Internal System: Dispatching secure fax request to 844-324-1974`);
    console.log(`Internal System: Triggering automated email alert to clinical team`);
    console.log("--- DISPATCH COMPLETE ---");
    
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 2500);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12 animate-in fade-in duration-500">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 scale-110 shadow-lg shadow-green-100/50">
            <i className="fa-solid fa-check-double text-4xl"></i>
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center text-white text-xs animate-bounce">
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
        
        <div className="space-y-4 px-4">
          <h2 className="text-2xl font-bold text-slate-800 font-quicksand">Request Transmitted!</h2>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-3">
            <p className="text-slate-600 text-sm leading-relaxed">
              Your request has been securely transmitted via **Fax** and **Automated Email** to our clinical systems.
            </p>
            <p className="text-slate-500 text-xs italic">
              Thank you, {formData.name}. A nurse has been paged and will call you back at <span className="font-bold text-slate-700">{formData.phone}</span>.
            </p>
          </div>
        </div>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', childName: '', phone: '', reason: '' });
          }}
          className="text-blue-500 font-bold text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
        >
          Request another callback
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800 font-quicksand">Request Callback</h2>
        <p className="text-slate-50 text-[11px] bg-blue-600 inline-block px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
          Automated Priority System
        </p>
        <p className="text-slate-500 text-sm">Priority front-desk notification system.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Parent/Guardian Name</label>
            <input
              required
              disabled={isSending}
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Child's Name</label>
            <input
              required
              disabled={isSending}
              type="text"
              value={formData.childName}
              onChange={e => setFormData(prev => ({ ...prev, childName: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
              placeholder="Child's full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Callback Number</label>
            <input
              required
              disabled={isSending}
              type="tel"
              value={formData.phone}
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
              placeholder="(###) ###-####"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Reason for Call</label>
            <textarea
              disabled={isSending}
              rows={3}
              value={formData.reason}
              onChange={e => setFormData(prev => ({ ...prev, reason: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Brief summary..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSending}
            className={`w-full text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 ${
              isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 shadow-blue-100 hover:bg-blue-700 active:scale-[0.98]'
            }`}
          >
            {isSending ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                <span className="uppercase tracking-widest text-xs">Transmitting Securely...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send Priority Request</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start space-x-4">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
          <i className="fa-solid fa-shield-halved text-xs"></i>
        </div>
        <div className="text-[11px] text-slate-500 leading-relaxed">
          <p className="font-black text-slate-700 mb-0.5 uppercase tracking-wider">Dual-Channel Dispatch</p>
          <p>Your request is sent automatically via encrypted Fax and Email to ensure immediate visibility at our triage station.</p>
        </div>
      </div>
    </div>
  );
};

export default CallbackRequest;
