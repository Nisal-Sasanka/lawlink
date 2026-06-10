import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusCircle, Search, Filter, Eye, Clock, CheckCircle, AlertTriangle, XCircle, ArrowRight } from 'lucide-react';

const complaints = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', category: 'Civil', priority: 'High', status: 'In Review', date: 'Jun 01, 2024', lawyer: 'Adv. Priya Nair', hearing: 'Jun 25, 2024' },
  { id: 'CMP-002', title: 'Wrongful Termination from Job', category: 'Labour', priority: 'Medium', status: 'Open', date: 'Jun 04, 2024', lawyer: 'Unassigned', hearing: 'TBD' },
  { id: 'CMP-003', title: 'Consumer Fraud by Online Store', category: 'Consumer', priority: 'Low', status: 'Resolved', date: 'May 28, 2024', lawyer: 'Adv. Rajesh Kumar', hearing: '—' },
];

const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
  'Closed': { color: 'bg-gray-100 text-gray-600', icon: <XCircle size={12} /> },
};
const priorityColor = {
  High: 'text-red-600 bg-red-50',
  Medium: 'text-yellow-600 bg-yellow-50',
  Low: 'text-green-600 bg-green-50',
};
          <PlusCircle size={18} /> New Complaint
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Cases', value: complaints.length, color: 'text-primary' },
          { label: 'Open', value: complaints.filter(c => c.status === 'Open').length, color: 'text-blue-600' },
          { label: 'In Review', value: complaints.filter(c => c.status === 'In Review').length, color: 'text-yellow-600' },
          { label: 'Resolved', value: complaints.filter(c => c.status === 'Resolved').length, color: 'text-green-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card text-center">
            <p className={`text-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-label-md text-on-surface-variant mt-xs">{s.label}</p>
          </div>
        ))}
      </div>

const MyComplaints = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = complaints.filter(c =>
    (statusFilter === 'All' || c.status === statusFilter) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">My Complaints</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Track all your legal cases and their current status.</p>
        </div>
        <button
          onClick={() => navigate('/user/complaints/new')}
          className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md font-semibold hover:opacity-90 transition-opacity"
          <PlusCircle size={18} /> New Complaint
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Cases', value: complaints.length, color: 'text-primary' },
          { label: 'Open', value: complaints.filter(c => c.status === 'Open').length, color: 'text-blue-600' },
          { label: 'In Review', value: complaints.filter(c => c.status === 'In Review').length, color: 'text-yellow-600' },
          { label: 'Resolved', value: complaints.filter(c => c.status === 'Resolved').length, color: 'text-green-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card text-center">
            <p className={`text-display font-bold ${s.color}`}>{s.value}</p>
            <p className="text-label-md text-on-surface-variant mt-xs">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Search & Filter */}
      <div className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card mb-lg">
        <div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text" placeholder="Search by title or case ID..."
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

      {/* Cases List */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-surface-container-high rounded-xl p-3xl text-center shadow-card">
          <AlertTriangle size={48} className="mx-auto text-on-surface-variant mb-lg opacity-30" />
          <p className="text-headline-sm text-on-surface-variant">No complaints found</p>
          <p className="text-body-md text-on-surface-variant mt-xs">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-md">
          {filtered.map(c => (
            <div key={c.id} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-md">
                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-sm mb-sm flex-wrap">
                    <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{c.id}</span>
                    <span className={`text-label-sm px-sm py-xs rounded-full font-semibold flex items-center gap-xs ${statusConfig[c.status]?.color}`}>
                      {statusConfig[c.status]?.icon} {c.status}
                    </span>
                    <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${priorityColor[c.priority]}`}>{c.priority}</span>
                    <span className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">{c.category}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-headline-sm text-on-surface mb-sm">{c.title}</h3>

                  {/* Meta */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
                    <div>
                      <p className="text-label-sm text-on-surface-variant">Filed</p>
                      <p className="text-body-sm text-on-surface font-medium">{c.date}</p>
                    </div>
                    <div>
                      <p className="text-label-sm text-on-surface-variant">Lawyer</p>
                      <p className={`text-body-sm font-medium ${c.lawyer === 'Unassigned' ? 'text-yellow-600' : 'text-on-surface'}`}>{c.lawyer}</p>
                    </div>
                    <div>
                      <p className="text-label-sm text-on-surface-variant">Next Hearing</p>
                      <p className="text-body-sm text-on-surface font-medium">{c.hearing}</p>
                    </div>
                  </div>
                </div>
