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
          {/* Next Hearing */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-lg">
            <p className="text-label-md text-primary mb-xs">📅 Next Hearing</p>
            <p className="text-body-md font-semibold text-on-surface">June 25, 2024</p>
            <p className="text-body-sm text-on-surface-variant">10:30 AM — District Court, Chennai</p>
</div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2 bg-white border border-surface-container-high rounded-2xl shadow-card flex flex-col" style={{ minHeight: '600px' }}>

          {/* Chat Header */}
          <div className="flex items-center gap-md p-lg border-b border-surface-container-high">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">PN</div>
            <div>
              <p className="text-body-md font-semibold text-on-surface">Adv. Priya Nair</p>
              <p className="text-body-sm text-green-600 flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Online</p>
            </div>
            <div className="ml-auto">
              <span className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">CMP-001</span>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-lg space-y-lg">
            {chat.map(m => (
              <div key={m.id} className={`flex items-end gap-sm ${m.from === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold shrink-0
                  ${m.from === 'user' ? 'bg-primary text-on-primary' : 'bg-primary-container text-on-primary-container'}`}>
                  {m.avatar}
                </div>
                <div className={`max-w-[75%] ${m.from === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-xs`}>
                  <div className={`px-lg py-md rounded-2xl text-body-md leading-relaxed
                    ${m.from === 'user' ? 'bg-primary text-on-primary rounded-br-sm' : 'bg-surface-container-low text-on-surface rounded-bl-sm'}`}>
                    {m.text}
                    {m.attachments?.map(a => (
                      <div key={a} className="flex items-center gap-xs mt-sm text-body-sm opacity-80">
                        <Paperclip size={12} /> {a}
                      </div>
                    ))}
                  </div>
                  <span className={`text-body-sm text-on-surface-variant ${m.from === 'user' ? 'text-right' : ''}`}>{m.time}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="p-lg border-t border-surface-container-high">
            <div className="flex items-center gap-sm bg-surface-container-low rounded-xl px-md py-sm">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-xs">
                <Paperclip size={18} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={msg}
                onChange={e => setMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                className="flex-1 bg-transparent text-body-md text-on-surface focus:outline-none"
              />
              <button
                onClick={send}
                disabled={!msg.trim()}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors
                  ${msg.trim() ? 'bg-primary text-on-primary hover:opacity-90' : 'bg-surface-container-high text-on-surface-variant'}`}
              >
