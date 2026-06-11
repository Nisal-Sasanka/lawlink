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

        {/* Revenue Chart */}
        <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
          <h2 className="text-headline-sm text-on-surface mb-xl flex items-center gap-sm">
            <BarChart3 size={18} className="text-primary" /> Revenue (₹) — 2024
          </h2>
          <div className="flex items-end gap-md h-40">
            {months.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center gap-sm">
                <span className="text-label-sm text-on-surface-variant">{(revenue[i] / 1000).toFixed(0)}K</span>
                <div
                  className="w-full bg-gradient-to-t from-primary to-on-primary-container rounded-t-lg hover:opacity-80 cursor-pointer"
                  style={{ height: `${(revenue[i] / 312000) * 130}px` }}
                  title={`${m}: ₹${revenue[i].toLocaleString()}`}
                />
                <span className="text-label-sm text-on-surface-variant">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">
        {/* Case Categories */}
        <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
          <h2 className="text-headline-sm text-on-surface mb-xl flex items-center gap-sm">
            <FileText size={18} className="text-primary" /> Cases by Category
          </h2>
          <div className="space-y-md">
            {categoryBreakdown.map((c, i) => (
              <div key={i}>
                <div className="flex justify-between mb-xs">
                  <span className="text-body-sm text-on-surface font-medium">{c.label}</span>
                  <span className="text-body-sm text-on-surface-variant">{c.count} cases ({c.pct}%)</span>
                </div>
                <SimpleBar value={c.pct} max={35} color="bg-primary" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Status Distribution */}
        <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
          <h2 className="text-headline-sm text-on-surface mb-xl flex items-center gap-sm">
            <CheckCircle size={18} className="text-primary" /> Case Status Overview
          </h2>
          <div className="space-y-lg">
            {[
              { label: 'Resolved', count: 312, pct: 75, color: 'bg-green-500' },
              { label: 'In Review', count: 56, pct: 13, color: 'bg-yellow-500' },
              { label: 'Open', count: 42, pct: 10, color: 'bg-blue-500' },
              { label: 'Closed', count: 8, pct: 2, color: 'bg-gray-400' },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between mb-xs">
                  <span className="text-body-sm text-on-surface font-medium">{s.label}</span>
                  <span className="text-body-sm text-on-surface-variant">{s.count} ({s.pct}%)</span>
                </div>
                <SimpleBar value={s.pct} max={80} color={s.color} />
              </div>
            ))}
          </div>

          <div className="mt-xl pt-lg border-t border-surface-container-high grid grid-cols-2 gap-md">
            <div className="bg-surface-container-low rounded-xl p-md text-center">
              <p className="text-display font-bold text-primary">8 days</p>
              <p className="text-label-sm text-on-surface-variant mt-xs">Avg. Resolution Time</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-md text-center">
              <p className="text-display font-bold text-green-600">75%</p>
              <p className="text-label-sm text-on-surface-variant mt-xs">Resolution Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Lawyers */}
      <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
        <h2 className="text-headline-sm text-on-surface mb-lg flex items-center gap-sm">
          <Scale size={18} className="text-primary" /> Top Performing Lawyers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low">
              <tr>
                {['Rank', 'Lawyer', 'Specialization', 'Cases', 'Rating', 'Revenue'].map(h => (
                  <th key={h} className="px-lg py-md text-label-md text-on-surface-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topLawyers.map((l, i) => (
                <tr key={i} className="border-t border-surface-container-high hover:bg-surface-container-low transition-colors">
                  <td className="px-lg py-md">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold
                      ${i === 0 ? 'bg-yellow-100 text-yellow-700' : i === 1 ? 'bg-gray-100 text-gray-600' : i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-surface-container text-on-surface-variant'}`}>
                      {i + 1}
                    </span>
                  </td>
                  <td className="px-lg py-md text-body-md font-semibold text-on-surface">{l.name}</td>
                  <td className="px-lg py-md"><span className="text-label-sm bg-primary/10 text-primary px-sm py-xs rounded">{l.spec}</span></td>
                  <td className="px-lg py-md text-body-md text-on-surface">{l.cases}</td>
                  <td className="px-lg py-md text-body-md font-semibold text-yellow-600">⭐ {l.rating}</td>
                  <td className="px-lg py-md text-body-md font-semibold text-primary">{l.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
