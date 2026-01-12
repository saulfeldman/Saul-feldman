
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

    // Simulate sending a fax to the practice fax number
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 2500);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-6 text-center py-12 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4 scale-110 shadow-lg shadow-green-100">
          <i className="fa-solid fa-print text-4xl"></i>
        </div>
        <div className="space-y-4 px-4">
          <h2 className="text-2xl font-bold text-slate-800">Fax Sent Successfully!</h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <p className="text-slate-600 text-sm leading-relaxed">
              Your callback request has been faxed to our office at <span className="font-bold text-blue-600">{PRACTICE_INFO.fax}</span>.
            </p>
            <p className="text-slate-500 text-xs">
              Thank you, {formData.name}. Our nursing staff will review the transmitted request and call you back at <span className="font-medium text-slate-700">{formData.phone}</span> as soon as possible.
            </p>
          </div>
        </div>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', childName: '', phone: '', reason: '' });
          }}
          className="text-blue-500 font-bold text-sm uppercase tracking-widest hover:underline mt-4"
        >
          Request another callback
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Request Callback</h2>
        <p className="text-slate-500 text-sm">Your request will be faxed directly to our front desk.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-wider">Parent/Guardian Name</label>
          <input
            required
            disabled={isSending}
            type="text"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-wider">Child's Name</label>
          <input
            required
            disabled={isSending}
            type="text"
            value={formData.childName}
            onChange={e => setFormData(prev => ({ ...prev, childName: e.target.value }))}
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
            placeholder="Child's full name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-wider">Callback Number</label>
          <input
            required
            disabled={isSending}
            type="tel"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
            placeholder="Best phone number to reach you"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase ml-2 tracking-wider">Brief Reason (Optional)</label>
          <textarea
            disabled={isSending}
            rows={3}
            value={formData.reason}
            onChange={e => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm resize-none"
            placeholder="e.g. Fever, cough, appointment question..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button 
            type="submit"
            disabled={isSending}
            className={`w-full text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 ${
              isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-500 shadow-blue-200 hover:bg-blue-600 active:scale-[0.98]'
            }`}
          >
            {isSending ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                <span>Transmitting Fax to Office...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-print"></i>
                <span>Fax Callback Request</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="p-4 bg-slate-100 rounded-2xl flex items-center space-x-3">
        <i className="fa-solid fa-circle-info text-blue-500"></i>
        <div className="text-[11px] text-slate-500 leading-tight">
          <p className="font-bold text-slate-700 mb-0.5">Transmission Detail:</p>
          <p>Requests are sent via secure fax to <strong>{PRACTICE_INFO.fax}</strong>. Typical callback time is 30-60 minutes during business hours.</p>
        </div>
      </div>
    </div>
  );
};

export default CallbackRequest;
