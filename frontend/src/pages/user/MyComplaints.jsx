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
