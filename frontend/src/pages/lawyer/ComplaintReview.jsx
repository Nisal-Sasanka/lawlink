import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FileText, MessageSquare, Clock, CheckCircle, AlertTriangle, Paperclip, Send, ArrowLeft, Calendar, User } from 'lucide-react';

const caseData = {
  id: 'CMP-001',
  title: 'Property Dispute with Neighbor',
  client: 'John Doe',
  clientEmail: 'john.doe@email.com',
  clientPhone: '+91 98765 43210',
  category: 'Civil Law',
  priority: 'High',
  status: 'In Review',
  filed: 'Jun 01, 2024',
  package: 'Standard Representation',
  description: 'The client is facing a property boundary dispute with a neighbor who has allegedly encroached on the client\'s registered land. The neighbor has constructed a wall approximately 2 feet inside the client\'s boundary as documented in the sale deed.',
  hearings: [
    { date: 'Jun 25, 2024', time: '10:30 AM', court: 'District Court, Chennai', status: 'Scheduled' },
  ],
  documents: [
    { name: 'aadhaar_card.pdf', type: 'ID Proof', date: 'Jun 02, 2024' },
    { name: 'sale_deed.pdf', type: 'Property Document', date: 'Jun 07, 2024' },
    { name: 'property_photos.jpg', type: 'Evidence', date: 'Jun 02, 2024' },
  ],
  timeline: [
    { event: 'Complaint Filed', date: 'Jun 01, 2024', done: true },
    { event: 'Lawyer Assigned (Adv. Priya Nair)', date: 'Jun 03, 2024', done: true },
    { event: 'Documents Reviewed', date: 'Jun 07, 2024', done: true },
    { event: 'Hearing Scheduled', date: 'Jun 08, 2024', done: true },
    { event: 'Court Hearing', date: 'Jun 25, 2024', done: false },
    { event: 'Final Resolution', date: 'TBD', done: false },
  ],
};

const messages = [
  { id: 1, from: 'lawyer', text: 'I have reviewed the sale deed. The encroachment is clearly visible. I am filing for an injunction.', time: '3:45 PM, Jun 07' },
  { id: 2, from: 'user', text: 'Thank you! Please let me know what additional documents might be needed.', time: '4:00 PM, Jun 07' },
];

const ComplaintReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState(messages);
  const [resolution, setResolution] = useState('');

  const send = () => {
    if (!msg.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), from: 'lawyer', text: msg, time: 'Just now' }]);
    setMsg('');
  };

  const tabs = ['overview', 'documents', 'chat', 'resolution'];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-md mb-xl">
        <button onClick={() => navigate('/lawyer/assigned-complaints')} className="p-sm rounded-lg hover:bg-surface-container transition-colors">
          <ArrowLeft size={20} className="text-on-surface-variant" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-sm mb-xs">
            <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{caseData.id}</span>
            <span className="bg-yellow-100 text-yellow-700 text-label-sm px-sm py-xs rounded-full flex items-center gap-xs">
              <Clock size={12} /> {caseData.status}
            </span>
            <span className="bg-red-50 text-red-600 text-label-sm px-sm py-xs rounded-full">{caseData.priority} Priority</span>
          </div>
          <h1 className="text-headline-md text-on-surface">{caseData.title}</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-sm mb-xl border-b border-surface-container-high">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-lg py-sm text-label-md capitalize transition-colors border-b-2 -mb-px
              ${tab === t ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          <div className="lg:col-span-2 space-y-lg">
            {/* Client Info */}
            <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
              <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-lg"><User size={18} className="text-primary" /> Client Information</h3>
              <div className="grid grid-cols-2 gap-md">
                {[
                  { label: 'Name', value: caseData.client },
                  { label: 'Email', value: caseData.clientEmail },
                  { label: 'Phone', value: caseData.clientPhone },
                  { label: 'Package', value: caseData.package },
                  { label: 'Category', value: caseData.category },
                  { label: 'Filed On', value: caseData.filed },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-label-sm text-on-surface-variant">{item.label}</p>
                    <p className="text-body-md text-on-surface font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
              <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-md"><FileText size={18} className="text-primary" /> Case Description</h3>
              <p className="text-body-md text-on-surface leading-relaxed">{caseData.description}</p>
            </div>

            {/* Hearings */}
            <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
              <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-md"><Calendar size={18} className="text-primary" /> Scheduled Hearings</h3>
              {caseData.hearings.map((h, i) => (
                <div key={i} className="flex items-center justify-between bg-surface-container-low rounded-xl p-md">
                  <div>
                    <p className="text-body-md font-semibold text-on-surface">{h.date} — {h.time}</p>
                    <p className="text-body-sm text-on-surface-variant">{h.court}</p>
                  </div>
                  <span className="text-label-sm bg-blue-100 text-blue-700 px-sm py-xs rounded-full">{h.status}</span>
                </div>
              ))}
            </div>
          </div>

           {/* Timeline */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card h-fit">
            <h3 className="text-headline-sm text-on-surface mb-lg">Case Timeline</h3>
            <div className="relative">
              {caseData.timeline.map((t, i) => (
                <div key={i} className="flex gap-md mb-lg last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${t.done ? 'bg-primary' : 'bg-surface-container-high'}`}>
                      {t.done ? <CheckCircle size={14} className="text-on-primary" /> : <Clock size={14} className="text-on-surface-variant" />}
                    </div>
                    {i < caseData.timeline.length - 1 && <div className={`w-0.5 flex-1 mt-xs ${t.done ? 'bg-primary' : 'bg-surface-container-high'}`} style={{ minHeight: '24px' }} />}
                  </div>
                  <div className="pb-md">
                    <p className={`text-body-sm font-medium ${t.done ? 'text-on-surface' : 'text-on-surface-variant'}`}>{t.event}</p>
                    <p className="text-body-sm text-on-surface-variant">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Documents */}
      {tab === 'documents' && (
        <div className="space-y-md">
          {caseData.documents.map((doc, i) => (
            <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card flex items-center gap-md">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Paperclip size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-body-md font-semibold text-on-surface">{doc.name}</p>
                <p className="text-body-sm text-on-surface-variant">{doc.type} — Uploaded {doc.date}</p>
              </div>
              <button className="px-md py-sm rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">Download</button>
            </div>
          ))}
        </div>
      )}

      {/* Chat */}
      {tab === 'chat' && (
        <div className="bg-white border border-surface-container-high rounded-xl shadow-card flex flex-col" style={{ height: '500px' }}>
          <div className="flex-1 overflow-y-auto p-lg space-y-lg">
            {chat.map(m => (
              <div key={m.id} className={`flex items-end gap-sm ${m.from === 'lawyer' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold shrink-0
                  ${m.from === 'lawyer' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                  {m.from === 'lawyer' ? 'Me' : 'C'}
                </div>
                <div className={`max-w-[70%] px-lg py-md rounded-2xl text-body-md
                  ${m.from === 'lawyer' ? 'bg-primary text-on-primary rounded-br-sm' : 'bg-surface-container-low text-on-surface rounded-bl-sm'}`}>
                  {m.text}
                  <p className={`text-body-sm mt-xs opacity-70 ${m.from === 'lawyer' ? '' : ''}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-lg border-t border-surface-container-high">
            <div className="flex items-center gap-sm bg-surface-container-low rounded-xl px-md py-sm">
              <input type="text" placeholder="Send a message to your client..." value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
                className="flex-1 bg-transparent text-body-md focus:outline-none" />
              <button onClick={send} disabled={!msg.trim()}
                className={`w-9 h-9 rounded-full flex items-center justify-center ${msg.trim() ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resolution */}
      {tab === 'resolution' && (
        <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card max-w-2xl">
          <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-lg">
            <CheckCircle size={20} className="text-green-600" /> Submit Case Resolution
          </h3>
          <div className="space-y-md">
            <div>
              <label className="text-label-sm text-on-surface-variant mb-xs block">Outcome *</label>
              <select className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary">
                <option value="">Select outcome...</option>
                <option>Resolved in client's favor</option>
                <option>Settled out of court</option>
                <option>Case dismissed</option>
                <option>Ongoing (requires extension)</option>
              </select>
            </div>
            <div>
              <label className="text-label-sm text-on-surface-variant mb-xs block">Resolution Summary *</label>
              <textarea rows={5} value={resolution} onChange={e => setResolution(e.target.value)} placeholder="Describe the outcome and key actions taken..."
                className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary resize-none" />
            </div>
            <div>
              <label className="text-label-sm text-on-surface-variant mb-xs block">Final Court Date</label>
              <input type="date" className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" />
            </div>
            <div className="flex gap-md">
              <button className="px-xl py-sm rounded-lg bg-green-600 text-white text-body-md font-semibold hover:bg-green-700 transition-colors">
                Mark as Resolved
              </button>
              <button className="px-xl py-sm rounded-lg border border-outline-variant text-body-md hover:bg-surface-container transition-colors">
                Save Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintReview;
