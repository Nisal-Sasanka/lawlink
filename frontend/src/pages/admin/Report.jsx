import React, { useState } from 'react';
import { TrendingUp, Users, Scale, FileText, DollarSign, CheckCircle, Clock, BarChart3, Download } from 'lucide-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const userGrowth = [320, 480, 650, 840, 1040, 1248];
const caseVolume = [28, 45, 62, 78, 98, 124];
const revenue = [82000, 124000, 168000, 210000, 256000, 312000];

const categoryBreakdown = [
  { label: 'Civil Law', count: 142, pct: 34 },
  { label: 'Family Law', count: 98, pct: 23 },
  { label: 'Criminal Law', count: 72, pct: 17 },
  { label: 'Labour Law', count: 58, pct: 14 },
  { label: 'Consumer Law', count: 38, pct: 9 },
  { label: 'Other', count: 13, pct: 3 },
];

const topLawyers = [
  { name: 'Adv. Pathum Nishanka', spec: 'Family Law', cases: 67, rating: 4.9, revenue: '₹1,34,000' },
  { name: 'Adv. Mangaleswaran Pavithar', spec: 'Civil Law', cases: 48, rating: 4.8, revenue: '₹96,000' },
  { name: 'Adv. Arjun Das', spec: 'Property Law', cases: 39, rating: 4.6, revenue: '₹78,000' },
  { name: 'Adv. Kavind Chamith', spec: 'Criminal Law', cases: 31, rating: 4.5, revenue: '₹62,000' },
];

const SimpleBar = ({ value, max, color }) => (
  <div className="w-full bg-surface-container rounded-full h-2">
    <div className={`h-2 rounded-full transition-all ${color}`} style={{ width: `${(value / max) * 100}%` }} />
  </div>
);

const Report = () => {
  const [period, setPeriod] = useState('Monthly');

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Platform Reports</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Key metrics and analytics for LawLink — June 2024.</p>
        </div>
        <div className="flex items-center gap-sm">
          {['Weekly', 'Monthly', 'Quarterly'].map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-md py-sm rounded-lg text-label-sm font-semibold transition-colors ${period === p ? 'bg-primary text-on-primary' : 'bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container-low'}`}>
              {p}
            </button>
          ))}
          <button className="flex items-center gap-xs px-md py-sm rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Users', value: '1,248', change: '+18%', positive: true, icon: <Users size={22} className="text-primary" />, bg: 'bg-primary/5' },
          { label: 'Active Lawyers', value: '156', change: '+6%', positive: true, icon: <Scale size={22} className="text-green-600" />, bg: 'bg-green-50' },
          { label: 'Cases This Month', value: '124', change: '+26%', positive: true, icon: <FileText size={22} className="text-blue-600" />, bg: 'bg-blue-50' },
          { label: 'Revenue (Jun)', value: '₹3.12L', change: '+18%', positive: true, icon: <DollarSign size={22} className="text-yellow-600" />, bg: 'bg-yellow-50' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-md`}>{kpi.icon}</div>
            <p className="text-label-md text-on-surface-variant">{kpi.label}</p>
            <p className="text-display text-on-surface mt-xs">{kpi.value}</p>
            <p className={`text-body-sm mt-xs font-medium ${kpi.positive ? 'text-green-600' : 'text-red-600'}`}>
              {kpi.positive ? '↑' : '↓'} {kpi.change} vs last month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">
        {/* User Growth Chart */}
        <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
          <h2 className="text-headline-sm text-on-surface mb-xl flex items-center gap-sm">
            <TrendingUp size={18} className="text-primary" /> User Growth (2024)
          </h2>
          <div className="flex items-end gap-md h-40">
            {months.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-sm">
                <span className="text-label-sm text-on-surface-variant">{userGrowth[i]}</span>
                <div
                  className="w-full bg-primary rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                  style={{ height: `${(userGrowth[i] / 1248) * 130}px` }}
                  title={`${m}: ${userGrowth[i]} users`}
                />
                <span className="text-label-sm text-on-surface-variant">{m}</span>
              </div>
            ))}
          </div>
        </div>
