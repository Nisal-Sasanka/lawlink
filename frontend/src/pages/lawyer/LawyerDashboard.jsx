import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Clock, CheckCircle, Star, TrendingUp, Users, Calendar, ArrowRight, MessageSquare, Bell } from 'lucide-react';

const activeCases = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', client: 'John Doe', category: 'Civil', priority: 'High', status: 'In Review', hearing: 'Jun 25, 2024' },
  { id: 'CMP-006', title: 'Rental Agreement Breach', client: 'Lakshmi Iyer', category: 'Civil', priority: 'Low', status: 'Open', hearing: 'TBD' },
];

const recentActivity = [
  { icon: '📩', text: 'New message from John Doe on CMP-001', time: '1 hour ago' },
  { icon: '📋', text: 'CMP-006 assigned to you — Lakshmi Iyer', time: '5 hours ago' },
  { icon: '📅', text: 'Hearing scheduled: Jun 25 — District Court, Chennai', time: '1 day ago' },
];

const LawyerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Welcome, Adv. Priya! 👋</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Here's your current caseload and upcoming schedule.</p>
        </div>
        <button onClick={() => navigate('/lawyer/assigned-complaints')} className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md font-semibold hover:opacity-90 transition-opacity">
          <Briefcase size={18} /> View All Cases
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Active Cases', value: 2, icon: <Briefcase size={24} className="text-primary" />, bg: 'bg-primary/5' },
          { label: 'Resolved Cases', value: 46, icon: <CheckCircle size={24} className="text-green-600" />, bg: 'bg-green-50' },
          { label: 'Avg Rating', value: '4.8 ⭐', icon: <Star size={24} className="text-yellow-500" />, bg: 'bg-yellow-50' },
          { label: 'Earnings (Jun)', value: '₹12,400', icon: <TrendingUp size={24} className="text-blue-600" />, bg: 'bg-blue-50' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-md`}>{s.icon}</div>
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className="text-headline-md font-bold text-on-surface mt-xs">{s.value}</p>
          </div>
        ))}
      </div>
