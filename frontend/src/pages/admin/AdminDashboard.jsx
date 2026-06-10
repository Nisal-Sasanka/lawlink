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

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Cases In Review', value: 18, color: 'text-yellow-600' },
          { label: 'Cases Resolved', value: 312, color: 'text-green-600' },
          { label: 'Articles Published', value: 34, color: 'text-blue-600' },
          { label: 'Avg Resolution Time', value: '8 days', color: 'text-primary' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-md shadow-card text-center">
            <p className={`text-headline-md font-bold ${s.color}`}>{s.value}</p>
            <p className="text-label-sm text-on-surface-variant mt-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-white border border-surface-container-high rounded-xl shadow-card">
          <div className="flex items-center justify-between p-xl border-b border-surface-container-high">
            <h2 className="text-headline-sm text-on-surface">Recent Activity</h2>
            <span className="text-body-sm text-on-surface-variant">Live feed</span>
          </div>
          <div className="divide-y divide-surface-container-high">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-md p-lg hover:bg-surface-container-low transition-colors">
                <div className="text-xl w-8 text-center shrink-0">{typeIcon[a.type]}</div>
                <div className="flex-1">
                  <p className="text-body-md text-on-surface"><span className="font-semibold">{a.user}</span> — {a.action}</p>
                  <p className="text-body-sm text-on-surface-variant mt-xs">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Management */}
        <div className="space-y-lg">
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Quick Manage</h3>
            <div className="space-y-sm">
              {[
                { label: 'Manage Users', icon: <Users size={18} />, to: '/admin/users', badge: '1,248' },
                { label: 'Manage Lawyers', icon: <Scale size={18} />, to: '/admin/lawyers', badge: '6 pending' },
                { label: 'Complaints', icon: <Briefcase size={18} />, to: '/admin/complaints', badge: '12 unassigned' },
                { label: 'Articles', icon: <FileText size={18} />, to: '/admin/articles', badge: '2 in review' },
              ].map((a, i) => (
                <div key={i} onClick={() => navigate(a.to)} className="flex items-center justify-between px-md py-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="flex items-center gap-sm text-on-surface">
                    <span className="text-primary">{a.icon}</span>
                    <span className="text-body-md">{a.label}</span>
                  </div>
                  <span className="text-label-sm text-on-surface-variant bg-white border border-surface-container-high px-sm py-xs rounded-full">{a.badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md flex items-center gap-sm">
              <Bell size={18} className="text-primary" /> Alerts
            </h3>
            <div className="space-y-sm">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-md">
                <p className="text-label-sm text-yellow-700 font-semibold">⚠️ 6 Lawyer Approvals Pending</p>
                <p className="text-body-sm text-yellow-600 mt-xs">Review and approve new lawyer registrations.</p>
                <button onClick={() => navigate('/admin/lawyers')} className="text-body-sm text-yellow-700 font-medium hover:underline mt-xs block">Review Now →</button>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-md">
                <p className="text-label-sm text-red-700 font-semibold">🔴 12 Complaints Unassigned</p>
                <p className="text-body-sm text-red-600 mt-xs">Cases waiting for a lawyer to be assigned.</p>
                <button onClick={() => navigate('/admin/complaints')} className="text-body-sm text-red-700 font-medium hover:underline mt-xs block">Assign Now →</button>
              </div>
            </div>
          </div>

          {/* Reports CTA */}
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-xl text-on-primary shadow-card">
            <TrendingUp size={32} className="mb-md" />
            <p className="text-headline-sm font-bold mb-xs">Monthly Report</p>
            <p className="text-body-sm opacity-80 mb-lg">View full analytics and platform health metrics.</p>
            <button onClick={() => navigate('/admin/report')} className="bg-white text-primary text-body-sm font-semibold px-lg py-sm rounded-xl hover:bg-on-primary-container transition-colors">
              View Report →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
