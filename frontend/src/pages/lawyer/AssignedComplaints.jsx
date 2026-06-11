import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, Eye, Clock, CheckCircle, AlertTriangle, ArrowRight, Calendar, User } from 'lucide-react';

const cases = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', client: 'John Doe', clientAvatar: 'JD', category: 'Civil', priority: 'High', status: 'In Review', date: 'Jun 01, 2024', hearing: 'Jun 25, 2024', package: 'Standard', unreadMessages: 2 },
  { id: 'CMP-006', title: 'Rental Agreement Breach', client: 'Lakshmi Iyer', clientAvatar: 'LI', category: 'Civil', priority: 'Low', status: 'Open', date: 'Jun 04, 2024', hearing: 'TBD', package: 'Basic', unreadMessages: 0 },
  { id: 'CMP-003', title: 'Consumer Fraud by Online Store', client: 'Ramesh Gupta', clientAvatar: 'RG', category: 'Consumer', priority: 'Low', status: 'Resolved', date: 'May 28, 2024', hearing: '—', package: 'Standard', unreadMessages: 0 },
];

const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
};

const priorityColor = {
  High: 'text-red-600 bg-red-50',
  Medium: 'text-yellow-600 bg-yellow-50',
  Low: 'text-green-600 bg-green-50',
};

const AssignedComplaints = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = cases.filter(c =>
    (statusFilter === 'All' || c.status === statusFilter) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.client.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Assigned Cases</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">All cases assigned to you. Click any case to review and respond.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Cases', value: cases.length, color: 'text-primary' },
          { label: 'Active', value: cases.filter(c => c.status !== 'Resolved').length, color: 'text-blue-600' },
          { label: 'In Review', value: cases.filter(c => c.status === 'In Review').length, color: 'text-yellow-600' },
          { label: 'Resolved', value: cases.filter(c => c.status === 'Resolved').length, color: 'text-green-600' },
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
              type="text" placeholder="Search by ID, title or client..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-sm flex-wrap">
            <Filter size={16} className="text-on-surface-variant" />
            {['All', 'Open', 'In Review', 'Resolved'].map(f => (
              <button key={f} onClick={() => setStatusFilter(f)}
                className={`px-md py-xs rounded-lg text-label-sm transition-colors ${statusFilter === f ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cases */}
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
                  <span className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">📦 {c.package}</span>
                  {c.unreadMessages > 0 && (
                    <span className="text-label-sm bg-primary text-on-primary px-sm py-xs rounded-full">
                      💬 {c.unreadMessages} new
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-headline-sm text-on-surface mb-sm">{c.title}</h3>

                {/* Client & Meta */}
                <div className="flex items-center gap-lg flex-wrap">
                  <div className="flex items-center gap-sm">
                    <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-label-sm font-bold text-on-secondary-container">
                      {c.clientAvatar}
                    </div>
                    <span className="text-body-sm text-on-surface font-medium">{c.client}</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-on-surface-variant">
                    <Clock size={12} /> Filed: {c.date}
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-on-surface-variant">
                    <Calendar size={12} /> Hearing: <span className="font-medium text-on-surface">{c.hearing}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigate(`/lawyer/complaint/${c.id}`)}
                className="flex items-center gap-xs px-lg py-sm rounded-xl bg-primary text-on-primary text-body-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                <Eye size={16} /> Review Case <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Hearings */}
      <div className="mt-xl bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
        <h2 className="text-headline-sm text-on-surface mb-lg flex items-center gap-sm">
          <Calendar size={20} className="text-primary" /> Upcoming Court Hearings
        </h2>
        <div className="space-y-sm">
          {cases.filter(c => c.hearing !== 'TBD' && c.hearing !== '—').map(c => (
            <div key={c.id} className="flex items-center justify-between bg-surface-container-low rounded-xl p-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-on-surface">{c.hearing}</p>
                  <p className="text-body-sm text-on-surface-variant">{c.id} — {c.client}</p>
                </div>
              </div>
              <button onClick={() => navigate(`/lawyer/complaint/${c.id}`)} className="text-body-sm text-primary hover:underline">
                View Case →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignedComplaints;
