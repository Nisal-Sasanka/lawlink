import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Scale, Bell, TrendingUp, Clock, CheckCircle, AlertTriangle, ArrowRight, User } from 'lucide-react';

const recentComplaints = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', category: 'Civil', status: 'In Review', date: 'Jun 01, 2024', lawyer: 'Adv. Priya Nair' },
  { id: 'CMP-002', title: 'Wrongful Termination', category: 'Labour', status: 'Open', date: 'Jun 04, 2024', lawyer: 'Unassigned' },
  { id: 'CMP-003', title: 'Consumer Fraud', category: 'Consumer', status: 'Resolved', date: 'May 28, 2024', lawyer: 'Adv. Rajesh Kumar' }, 
];
const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
};

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Welcome back, John! 👋</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Here's an overview of your active cases and recent activity.</p>
        </div>
        <button
          onClick={() => navigate('/user/complaints/new')}
          className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md font-semibold hover:opacity-90 transition-opacity"
        >
          <PlusCircle size={18} /> New Complaint
        </button>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Active Cases', value: 2, icon: <Scale size={24} className="text-primary" />, bg: 'bg-primary/5', change: '+1 this month' },
          { label: 'In Review', value: 1, icon: <Clock size={24} className="text-yellow-600" />, bg: 'bg-yellow-50', change: 'Lawyer reviewing' },
          { label: 'Resolved', value: 1, icon: <CheckCircle size={24} className="text-green-600" />, bg: 'bg-green-50', change: 'All time' },
          { label: 'Unread Notifications', value: 3, icon: <Bell size={24} className="text-blue-600" />, bg: 'bg-blue-50', change: 'View all' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-md`}>{s.icon}</div>
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className="text-display text-on-surface mt-xs">{s.value}</p>
            <p className="text-body-sm text-on-surface-variant mt-xs">{s.change}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Recent Complaints */}
        <div className="lg:col-span-2 bg-white border border-surface-container-high rounded-xl shadow-card">
          <div className="flex items-center justify-between p-xl border-b border-surface-container-high">
            <h2 className="text-headline-sm text-on-surface">Recent Complaints</h2>
            <Link to="/user/complaints" className="text-body-sm text-primary hover:underline no-underline flex items-center gap-xs">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="divide-y divide-surface-container-high">
            {recentComplaints.map(c => (
              <div key={c.id} className="p-lg hover:bg-surface-container-low transition-colors cursor-pointer" onClick={() => navigate(`/user/complaints/${c.id}`)}>
                <div className="flex items-start justify-between gap-md">
                  <div className="flex-1">
                    <div className="flex items-center gap-sm mb-xs flex-wrap">
                      <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{c.id}</span>
                      <span className={`text-label-sm px-sm py-xs rounded-full flex items-center gap-xs ${statusConfig[c.status]?.color}`}>
                        {statusConfig[c.status]?.icon} {c.status}
                      </span>
                    </div>
<p className="text-body-md font-semibold text-on-surface">{c.title}</p>
                    <div className="flex items-center gap-md mt-xs text-body-sm text-on-surface-variant flex-wrap">
                      <span>{c.category}</span>
                      <span>•</span>
                      <span>{c.date}</span>
                      <span>•</span>
                      <span className={c.lawyer === 'Unassigned' ? 'text-yellow-600 font-medium' : ''}>{c.lawyer}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-on-surface-variant shrink-0 mt-xs" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-lg">
          {/* Quick Actions */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Quick Actions</h3>
            <div className="space-y-sm">
              {[
                { label: 'Submit New Complaint', icon: <PlusCircle size={18} />, to: '/user/complaints/new', primary: true },
                { label: 'Find a Lawyer', icon: <User size={18} />, to: '/user/lawyers/search', primary: false },
                { label: 'My Complaints', icon: <FileText size={18} />, to: '/user/complaints', primary: false },
                { label: 'Notifications', icon: <Bell size={18} />, to: '/user/notifications', primary: false },
              ].map((a, i) => (
                <Link key={i} to={a.to} className="no-underline">
                  <div className={`flex items-center gap-md px-md py-sm rounded-xl transition-colors cursor-pointer
                    ${a.primary ? 'bg-primary text-on-primary hover:opacity-90' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}`}>
                    {a.icon}
                    <span className="text-body-md">{a.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Your Lawyer */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Your Lawyer</h3>
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-bold text-on-primary-container">PN</div>
              <div>
                <p className="text-body-md font-semibold text-on-surface">Adv. Priya Nair</p>
                <p className="text-body-sm text-on-surface-variant">Civil Law • ⭐ 4.8</p>
                <div className="flex items-center gap-xs mt-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-body-sm text-green-600">Online</span>
                </div>
              </div>
            </div>


