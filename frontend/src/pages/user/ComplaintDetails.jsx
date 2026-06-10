import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, AlertTriangle, FileText, User, Calendar, MessageSquare, Paperclip, Download } from 'lucide-react';

const complaintsData = {
  'CMP-001': {
    id: 'CMP-001', title: 'Property Dispute with Neighbor',
    category: 'Civil Law', priority: 'High', status: 'In Review',
    date: 'Jun 01, 2024', incidentDate: 'May 25, 2024',
    location: 'Chennai, Tamil Nadu', opposingParty: 'Mr. Suresh Rajan',
    package: 'Standard Representation',
    description: 'My neighbor, Mr. Suresh Rajan, has encroached upon approximately 2 feet of my registered property land and constructed a boundary wall inside my premises. The encroachment is clearly visible and documented in the official survey and my sale deed. This has been going on for 3 months and he refuses to remove the construction despite multiple requests.',
    assignedLawyer: { name: 'Adv. Priya Nair', spec: 'Civil Law', rating: 4.8, avatar: 'PN' },
    documents: [
      { name: 'aadhaar_card.pdf', type: 'ID Proof', date: 'Jun 02, 2024', size: '342 KB' },
      { name: 'sale_deed.pdf', type: 'Property Document', date: 'Jun 07, 2024', size: '1.2 MB' },
      { name: 'property_photos.jpg', type: 'Evidence', date: 'Jun 02, 2024', size: '2.8 MB' },
    ],
    timeline: [
      { event: 'Complaint Filed', date: 'Jun 01, 2024', time: '09:32 AM', done: true },
      { event: 'Payment Received (₹1,999)', date: 'Jun 01, 2024', time: '09:45 AM', done: true },
      { event: 'Lawyer Assigned — Adv. Priya Nair', date: 'Jun 03, 2024', time: '11:00 AM', done: true },
      { event: 'Documents Reviewed by Lawyer', date: 'Jun 07, 2024', time: '03:30 PM', done: true },
      { event: 'Injunction Filing Prepared', date: 'Jun 10, 2024', time: '—', done: false },
      { event: 'Court Hearing', date: 'Jun 25, 2024', time: '10:30 AM', done: false },
      { event: 'Resolution', date: 'TBD', time: '—', done: false },
    ],
    hearing: { date: 'Jun 25, 2024', time: '10:30 AM', court: 'District Court, Chennai', judge: 'Hon. Justice M. Raghavan' },
  },
};
const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', label: 'Open' },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', label: 'In Review' },
  'Resolved': { color: 'bg-green-100 text-green-700', label: 'Resolved' },
  'Closed': { color: 'bg-gray-100 text-gray-600', label: 'Closed' },
};

const ComplaintDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const complaint = complaintsData[id] || complaintsData['CMP-001'];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-md mb-xl">
        <button onClick={() => navigate(-1)} className="p-sm rounded-lg hover:bg-surface-container transition-colors">
          <ArrowLeft size={20} className="text-on-surface-variant" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-sm mb-xs flex-wrap">
            <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{complaint.id}</span>
            <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${statusConfig[complaint.status]?.color}`}>{complaint.status}</span>
            <span className="text-label-sm bg-red-50 text-red-600 px-sm py-xs rounded-full">{complaint.priority} Priority</span>
            <span className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">{complaint.category}</span>
          </div>
          <h1 className="text-headline-md text-on-surface">{complaint.title}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-lg">
          {/* Case Info */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h2 className="text-headline-sm text-on-surface mb-lg flex items-center gap-sm">
              <FileText size={18} className="text-primary" /> Case Information
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-lg mb-lg">
              {[
                { label: 'Filed On', value: complaint.date },
                { label: 'Incident Date', value: complaint.incidentDate },
                { label: 'Location', value: complaint.location },
                { label: 'Opposing Party', value: complaint.opposingParty },
                { label: 'Package', value: complaint.package },
                { label: 'Case ID', value: complaint.id },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-label-sm text-on-surface-variant">{item.label}</p>
                  <p className="text-body-md text-on-surface font-medium mt-xs">{item.value}</p>
                </div>
              ))}
            </div>
            <div>
<p className="text-label-sm text-on-surface-variant mb-sm">Description</p>
              <div className="bg-surface-container-low rounded-xl p-lg">
                <p className="text-body-md text-on-surface leading-relaxed">{complaint.description}</p>
              </div>
            </div>
          </div>
          {/* Documents */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h2 className="text-headline-sm text-on-surface mb-lg flex items-center gap-sm">
              <Paperclip size={18} className="text-primary" /> Uploaded Documents
            </h2>
            <div className="space-y-sm">
              {complaint.documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between bg-surface-container-low rounded-xl p-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-body-md font-semibold text-on-surface">{doc.name}</p>
                      <p className="text-body-sm text-on-surface-variant">{doc.type} • {doc.size} • Uploaded {doc.date}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">
                    <Download size={14} /> Download
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Actions */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h2 className="text-headline-sm text-on-surface mb-lg">Quick Actions</h2>
            <div className="flex gap-md flex-wrap">
              <Link to="/user/consultation" className="no-underline">
                <button className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md hover:opacity-90 transition-opacity">
                  <MessageSquare size={18} /> Message Lawyer
                </button>
              </Link>
              <button className="flex items-center gap-sm px-lg py-sm rounded-xl border border-outline-variant text-body-md hover:bg-surface-container transition-colors">
                <Paperclip size={18} /> Upload More Documents
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-lg">
          {/* Assigned Lawyer */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md flex items-center gap-sm">
              <User size={18} className="text-primary" /> Assigned Lawyer
            </h3>
            {complaint.assignedLawyer ? (
              <>
                <div className="flex items-center gap-md mb-lg">
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                    {complaint.assignedLawyer.avatar}
                  </div>
                  <div>
                    <p className="text-body-md font-semibold text-on-surface">{complaint.assignedLawyer.name}</p>
                    <p className="text-body-sm text-on-surface-variant">{complaint.assignedLawyer.spec}</p>
                    <p className="text-body-sm text-yellow-600">⭐ {complaint.assignedLawyer.rating} / 5.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-body-sm text-green-600">Currently online</span>
                </div>
              </>
            ) : (
              <div className="text-center py-lg">
                <p className="text-body-md text-yellow-600 font-medium">⏳ Pending Assignment</p>
                <p className="text-body-sm text-on-surface-variant mt-xs">A lawyer will be assigned within 24 hours.</p>
              </div>
            )}
          </div>
          {/* Next Hearing */}
          {complaint.hearing && (
            <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-xl text-on-primary shadow-card">
              <Calendar size={24} className="mb-md" />
              <p className="text-label-md opacity-80 mb-xs">📅 Next Court Hearing</p>
              <p className="text-headline-sm font-bold">{complaint.hearing.date}</p>
              <p className="text-body-sm opacity-80 mt-xs">{complaint.hearing.time}</p>
              <p className="text-body-sm opacity-70 mt-xs">{complaint.hearing.court}</p>
              {complaint.hearing.judge && (
                <p className="text-body-sm opacity-70 mt-xs">{complaint.hearing.judge}</p>
              )}
            </div>
          )}

          {/* Timeline */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-lg">Case Timeline</h3>
            <div className="space-y-sm">
              {complaint.timeline.map((item, i) => (
                <div key={i} className="flex gap-md">
