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
