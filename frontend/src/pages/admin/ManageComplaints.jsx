import React, { useState } from 'react';
import { Search, Eye, MessageSquare, Clock, CheckCircle, XCircle, AlertTriangle, Filter } from 'lucide-react';

const complaints = [
  { id: 'CMP-001', user: 'John Doe', userEmail: 'john.doe@email.com', title: 'Property Dispute with Neighbor', category: 'Civil', priority: 'High', status: 'Open', assignedTo: 'Adv. Priya Nair', date: 'Jun 01, 2024', description: 'I am facing a property boundary dispute with my neighbor who has encroached on my land. Need legal advice urgently.' },
  { id: 'CMP-002', user: 'Anita Rao', userEmail: 'anita.rao@email.com', title: 'Wrongful Termination from Job', category: 'Labour', priority: 'Medium', status: 'In Review', assignedTo: 'Adv. Kavitha Menon', date: 'Jun 03, 2024', description: 'My employer terminated me without proper notice and without any valid reason. Seeking legal help.' },
  { id: 'CMP-003', user: 'Ramesh Gupta', userEmail: 'ramesh.g@email.com', title: 'Consumer Fraud by Online Store', category: 'Consumer', priority: 'Low', status: 'Resolved', assignedTo: 'Adv. Rajesh Kumar', date: 'May 28, 2024', description: 'I was cheated by an online store that took money but never delivered goods and is now unreachable.' },
  { id: 'CMP-004', user: 'Sunita Patel', userEmail: 'sunita.p@email.com', title: 'Domestic Violence Case', category: 'Family', priority: 'High', status: 'Open', assignedTo: null, date: 'Jun 05, 2024', description: 'Experiencing domestic violence and need immediate legal assistance and protection order.' },
  { id: 'CMP-005', user: 'Arun Krishnan', userEmail: 'arun.k@email.com', title: 'Cheque Bounce Case', category: 'Criminal', priority: 'Medium', status: 'Closed', assignedTo: 'Adv. Arjun Das', date: 'May 20, 2024', description: 'A cheque issued to me by a business partner has bounced twice. Need to file a case under NI Act.' },
  { id: 'CMP-006', user: 'Lakshmi Iyer', userEmail: 'lakshmi.i@email.com', title: 'Rental Agreement Breach', category: 'Civil', priority: 'Low', status: 'In Review', assignedTo: 'Adv. Meena Sharma', date: 'Jun 04, 2024', description: 'My landlord is violating the rental agreement by demanding rent hike mid-tenancy.' },
];

const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
  'Closed': { color: 'bg-gray-100 text-gray-600', icon: <XCircle size={12} /> },
};

const priorityColor = { High: 'text-red-600 bg-red-50', Medium: 'text-yellow-600 bg-yellow-50', Low: 'text-green-600 bg-green-50' };

const ManageComplaints = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = complaints.filter(c =>
    (statusFilter === 'All' || c.status === statusFilter) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.user.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Manage Complaints</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">View, assign and resolve user complaints across the platform.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total', value: complaints.length, color: 'text-primary' },
          { label: 'Open', value: complaints.filter(c => c.status === 'Open').length, color: 'text-blue-600' },
          { label: 'In Review', value: complaints.filter(c => c.status === 'In Review').length, color: 'text-yellow-600' },
          { label: 'Resolved', value: complaints.filter(c => c.status === 'Resolved').length, color: 'text-green-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className={`text-display ${s.color} mt-xs`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card mb-lg">
        <div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text" placeholder="Search by ID, title, or user..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-sm flex-wrap">
            <Filter size={16} className="text-on-surface-variant" />
            {['All', 'Open', 'In Review', 'Resolved', 'Closed'].map(f => (
              <button key={f} onClick={() => setStatusFilter(f)}
                className={`px-md py-xs rounded-lg text-label-sm transition-colors ${statusFilter === f ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-md">
        {filtered.map(c => (
          <div key={c.id} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-md">
              <div className="flex-1">
                <div className="flex items-center gap-sm mb-sm flex-wrap">
                  <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{c.id}</span>
                  <span className={`text-label-sm px-sm py-xs rounded-full font-semibold flex items-center gap-xs ${statusConfig[c.status]?.color}`}>
                    {statusConfig[c.status]?.icon} {c.status}
                  </span>
                  <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${priorityColor[c.priority]}`}>{c.priority} Priority</span>
                  <span className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">{c.category}</span>
                </div>
                <h3 className="text-headline-sm text-on-surface mb-xs">{c.title}</h3>
                <p className="text-body-sm text-on-surface-variant mb-sm line-clamp-2">{c.description}</p>
                <div className="flex items-center gap-lg text-body-sm text-on-surface-variant flex-wrap">
                  <span>👤 {c.user}</span>
                  <span>📅 {c.date}</span>
                  <span>⚖️ {c.assignedTo || <span className="text-yellow-600 font-medium">Unassigned</span>}</span>
                </div>
              </div>
              <div className="flex gap-sm">
                <button onClick={() => setSelected(c)} className="flex items-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">
                  <Eye size={14} /> View
                </button>
                {!c.assignedTo && (
                  <button className="flex items-center gap-xs px-md py-sm rounded-lg bg-primary text-on-primary text-body-sm hover:bg-primary-container transition-colors">
                    Assign
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
