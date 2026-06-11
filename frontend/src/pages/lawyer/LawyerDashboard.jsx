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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Active Cases */}
        <div className="lg:col-span-2 bg-white border border-surface-container-high rounded-xl shadow-card">
          <div className="flex items-center justify-between p-xl border-b border-surface-container-high">
            <h2 className="text-headline-sm text-on-surface">Active Cases</h2>
            <button onClick={() => navigate('/lawyer/assigned-complaints')} className="text-body-sm text-primary hover:underline flex items-center gap-xs">
              All cases <ArrowRight size={14} />
            </button>
          </div>
          <div className="divide-y divide-surface-container-high">
            {activeCases.map(c => (
              <div key={c.id} onClick={() => navigate(`/lawyer/complaint/${c.id}`)}
                className="p-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-md">
                  <div className="flex-1">
                    <div className="flex items-center gap-sm mb-xs flex-wrap">
                      <span className="text-label-sm font-bold text-primary bg-primary/10 px-sm py-xs rounded">{c.id}</span>
                      <span className={`text-label-sm px-sm py-xs rounded-full ${c.status === 'In Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>{c.status}</span>
                      <span className={`text-label-sm px-sm py-xs rounded-full ${c.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'}`}>{c.priority}</span>
                    </div>
                    <p className="text-body-md font-semibold text-on-surface">{c.title}</p>
                    <div className="flex items-center gap-md mt-xs text-body-sm text-on-surface-variant flex-wrap">
                      <span>👤 {c.client}</span>
                      <span>📂 {c.category}</span>
                      <span>📅 {c.hearing}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-on-surface-variant shrink-0 mt-xs" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-lg">
          {/* Quick Actions */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Quick Actions</h3>
            <div className="space-y-sm">
              {[
                { label: 'Assigned Cases', icon: <Briefcase size={18} />, to: '/lawyer/assigned-complaints' },
                { label: 'Notifications', icon: <Bell size={18} />, to: '/lawyer/notifications' },
                { label: 'Package Rates', icon: <TrendingUp size={18} />, to: '/lawyer/packages' },
                { label: 'My Profile', icon: <Users size={18} />, to: '/lawyer/profile' },
              ].map((a, i) => (
                <div key={i} onClick={() => navigate(a.to)}
                  className="flex items-center gap-md px-md py-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                  <span className="text-primary">{a.icon}</span>
                  <span className="text-body-md text-on-surface">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Recent Activity</h3>
            <div className="space-y-md">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-sm">
                  <span className="text-xl shrink-0">{a.icon}</span>
                  <div>
                    <p className="text-body-sm text-on-surface">{a.text}</p>
                    <p className="text-body-sm text-on-surface-variant mt-xs">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Hearing */}
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-xl text-on-primary shadow-card">
            <Calendar size={28} className="mb-md" />
            <p className="text-label-md opacity-80 mb-xs">Next Court Hearing</p>
            <p className="text-headline-sm font-bold">June 25, 2024</p>
            <p className="text-body-sm opacity-80 mt-xs">10:30 AM — District Court, Chennai</p>
            <p className="text-body-sm opacity-70 mt-xs">CMP-001 — John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
