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
