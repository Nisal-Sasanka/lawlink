import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Users, Briefcase, FileText, TrendingUp, AlertTriangle, Clock, CheckCircle, ArrowRight, Bell } from 'lucide-react';

const recentActivity = [
  { user: 'John Doe', action: 'Submitted a complaint (CMP-006)', time: '2 hours ago', type: 'complaint' },
  { user: 'Jane Smith', action: 'Registered as a Lawyer', time: '5 hours ago', type: 'lawyer' },
  { user: 'Ramesh Gupta', action: 'Completed payment (₹1,999)', time: '1 day ago', type: 'payment' },
  { user: 'Sunita Patel', action: 'Complaint CMP-004 marked Open', time: '2 days ago', type: 'case' },
  { user: 'Adv. Priya Nair', action: 'CMP-001 status → In Review', time: '2 days ago', type: 'update' },
];

const typeIcon = {
  complaint: '📋', lawyer: '⚖️', payment: '💳', case: '🔔', update: '✅',
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Admin Dashboard</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Platform-wide overview — LawLink management console.</p>
        </div>
        <div className="text-body-sm text-on-surface-variant bg-white border border-surface-container-high rounded-xl px-lg py-sm shadow-card">
          📅 {new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Users', value: '1,248', icon: <Users size={24} className="text-primary" />, bg: 'bg-primary/5', change: '+24 this week' },
          { label: 'Active Lawyers', value: '156', icon: <Scale size={24} className="text-green-600" />, bg: 'bg-green-50', change: '6 pending approval' },
          { label: 'Open Complaints', value: '42', icon: <AlertTriangle size={24} className="text-yellow-600" />, bg: 'bg-yellow-50', change: '12 unassigned' },
          { label: 'Revenue (Jun)', value: '₹2.4L', icon: <TrendingUp size={24} className="text-blue-600" />, bg: 'bg-blue-50', change: '+18% vs May' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-md`}>{s.icon}</div>
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className="text-display text-on-surface mt-xs">{s.value}</p>
            <p className="text-body-sm text-on-surface-variant mt-xs">{s.change}</p>
          </div>
        ))}
      </div>
