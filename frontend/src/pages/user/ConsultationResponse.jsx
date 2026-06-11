import React, { useState } from 'react';
import { MessageSquare, Send, FileText, Clock, CheckCircle, User, Paperclip } from 'lucide-react';

const messages = [
  {
    id: 1, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Hello! I have reviewed the initial details of your property dispute case. Could you please share the original sale deed or title document for the property in question?',
    time: '10:15 AM, Jun 07', attachments: [],
  },
  {
    id: 2, from: 'user', sender: 'You', avatar: 'JD',
    text: 'Thank you for getting in touch. I have uploaded the sale deed under the documents section. Please find it there.',
    time: '11:30 AM, Jun 07', attachments: ['sale_deed.pdf'],
  },
  {
    id: 3, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Thank you! I have reviewed the sale deed. The encroachment is clearly documented. I will be filing for an injunction on your behalf. Our first hearing is scheduled for June 25, 2024. Please be available.',
    time: '3:45 PM, Jun 07', attachments: [],
  },
  {
    id: 4, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Also, please try to get any witness statements from neighbors who may have observed the encroachment. This will strengthen our case considerably.',
    time: '3:48 PM, Jun 07', attachments: [],
  },
];
const ConsultationResponse = () => {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState(messages);

  const send = () => {
    if (!msg.trim()) return;
    setChat(prev => [...prev, {
      id: Date.now(), from: 'user', sender: 'You', avatar: 'JD',
      text: msg, time: 'Just now', attachments: [],
    }]);
    setMsg('');
  };
return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">Consultation Chat</h1>
        <p className="text-body-md text-on-surface-variant mt-xs">Direct communication with your assigned lawyer for case CMP-001.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Sidebar Info */}
        <div className="space-y-lg">
          {/* Lawyer Card */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-lg shadow-card">
            <h3 className="text-label-md text-on-surface-variant mb-md">Your Lawyer</h3>
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">PN</div>
              <div>
                <p className="text-body-md font-semibold text-on-surface">Adv. Priya Nair</p>
                <p className="text-body-sm text-on-surface-variant">Civil Law Specialist</p>
                <div className="flex items-center gap-xs mt-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-body-sm text-green-600">Online</span>
                </div>
              </div>
            </div>
            <div className="space-y-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between"><span>Experience</span><span className="font-medium text-on-surface">12 years</span></div>
              <div className="flex justify-between"><span>Rating</span><span className="font-medium text-on-surface">⭐ 4.8</span></div>
              <div className="flex justify-between"><span>Cases Won</span><span className="font-medium text-on-surface">42 / 48</span></div>
            </div>
          </div>
          {/* Case Info */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-lg shadow-card">
            <h3 className="text-label-md text-on-surface-variant mb-md">Case Details</h3>
            <div className="space-y-sm text-body-sm">
              <div className="flex items-center gap-sm text-on-surface-variant">
                <FileText size={14} className="text-primary" />
                <span className="font-medium text-on-surface">CMP-001</span>
              </div>
              <p className="text-on-surface font-medium">Property Dispute with Neighbor</p>
              <div className="flex items-center gap-xs mt-sm">
                <span className="bg-blue-100 text-blue-700 text-label-sm px-sm py-xs rounded-full flex items-center gap-xs">
                  <Clock size={12} /> In Review
                </span>
              </div>
            </div>
          </div>

