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
