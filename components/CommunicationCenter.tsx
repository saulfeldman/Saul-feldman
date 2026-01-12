
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const CommunicationCenter: React.FC = () => {
  const contacts = [
    {
      name: 'Main Office',
      action: 'Call Now',
      value: PRACTICE_INFO.practicePhone,
      link: `tel:${PRACTICE_INFO.practicePhone}`,
      icon: 'fa-phone',
      color: 'bg-blue-500',
    },
    {
      name: 'WhatsApp Support',
      action: 'Message',
      value: PRACTICE_INFO.whatsapp,
      link: `https://wa.me/${PRACTICE_INFO.whatsapp.replace('+', '')}`,
      icon: 'fa-whatsapp',
      color: 'bg-green-500',
      brand: true,
    },
    {
      name: 'Dr. Feldman',
      action: 'Text Only',
      value: PRACTICE_INFO.drFeldmanText,
      link: `sms:${PRACTICE_INFO.drFeldmanText}`,
      icon: 'fa-comment-medical',
      color: 'bg-teal-500',
    },
    {
      name: 'Dr. Bulmash',
      action: 'Text Only',
      value: PRACTICE_INFO.drBulmashText,
      link: `sms:${PRACTICE_INFO.drBulmashText}`,
      icon: 'fa-comment-medical',
      color: 'bg-indigo-500',
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Communication Center</h2>
        <p className="text-slate-500 text-sm">Choose your preferred way to reach our team</p>
      </div>

      <div className="space-y-3">
        {contacts.map((contact, idx) => {
          const Content = (
            <div className="flex items-center">
              <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center text-white mr-4 shadow-sm`}>
                <i className={`fa-${contact.brand ? 'brands' : 'solid'} ${contact.icon} text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800">{contact.name}</h3>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{contact.action}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-600">{contact.value}</p>
                {contact.link !== '#' && <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-300 mt-1"></i>}
              </div>
            </div>
          );

          return contact.link === '#' ? (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm opacity-80 cursor-default">
              {Content}
            </div>
          ) : (
            <a
              key={idx}
              href={contact.link}
              target={contact.brand ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              {Content}
            </a>
          );
        })}
      </div>

      <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-3">
        <i className="fa-solid fa-lightbulb text-amber-500 mt-1"></i>
        <div className="text-xs text-amber-800 leading-relaxed">
          <p className="font-bold mb-1">Response Times:</p>
          <p>Phone calls are answered immediately during business hours. Texts to doctors are monitored periodically. For life-threatening emergencies, dial 911.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunicationCenter;
