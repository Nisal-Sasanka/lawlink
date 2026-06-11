import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Eye, Star, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

const lawyers = [
  { id: 1, name: 'Adv. Priya Nair', email: 'priya.nair@lawlink.in', phone: '+91 98400 11223', specialization: 'Civil Law', location: 'Colombo', experience: '12 yrs', cases: 48, rating: 4.8, status: 'Active', registered: 'Jan 10, 2023', avatar: 'PN' },
  { id: 2, name: 'Adv. Rajesh Kumar', email: 'rajesh.kumar@lawlink.in', phone: '+91 98765 44321', specialization: 'Criminal Law', location: 'Batticaloa', experience: '8 yrs', cases: 31, rating: 4.5, status: 'Active', registered: 'Mar 22, 2023', avatar: 'RK' },
  { id: 3, name: 'Adv. Meena Sharma', email: 'meena.sharma@lawlink.in', phone: '+91 90000 55678', specialization: 'Family Law', location: 'Trincomalee', experience: '15 yrs', cases: 67, rating: 4.9, status: 'Active', registered: 'Feb 05, 2023', avatar: 'MS' },
  { id: 4, name: 'Adv. Suresh Pillai', email: 'suresh.pillai@lawlink.in', phone: '+91 97890 23456', specialization: 'Corporate Law', location: 'Jaffna', experience: '10 yrs', cases: 22, rating: 4.2, status: 'Pending', registered: 'Jun 14, 2024', avatar: 'SP' },
  { id: 5, name: 'Adv. Kavitha Menon', email: 'kavitha.menon@lawlink.in', phone: '+91 98112 67890', specialization: 'Labour Law', location: 'Galle', experience: '6 yrs', cases: 18, rating: 4.0, status: 'Suspended', registered: 'Aug 30, 2023', avatar: 'KM' },
  { id: 6, name: 'Adv. Arjun Das', email: 'arjun.das@lawlink.in', phone: '+91 96001 34567', specialization: 'Property Law', location: 'Kurunagala', experience: '9 yrs', cases: 39, rating: 4.6, status: 'Active', registered: 'Nov 12, 2023', avatar: 'AD' },
];

const statusColor = { Active: 'bg-green-100 text-green-700', Pending: 'bg-yellow-100 text-yellow-700', Suspended: 'bg-red-100 text-red-700' };

const ManageLawyers = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = lawyers.filter(l =>
    (filter === 'All' || l.status === filter) &&
    (l.name.toLowerCase().includes(search.toLowerCase()) || l.specialization.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Manage Lawyers</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Review, approve and manage registered lawyers on LawLink.</p>
        </div>
        <div className="flex items-center gap-sm text-body-sm bg-primary text-on-primary px-lg py-sm rounded-lg cursor-pointer hover:bg-primary-container transition-colors">
          <CheckCircle size={16} />
          <span>{lawyers.filter(l => l.status === 'Pending').length} Pending Approvals</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Lawyers', value: lawyers.length, color: 'text-primary' },
          { label: 'Active', value: lawyers.filter(l => l.status === 'Active').length, color: 'text-green-600' },
          { label: 'Pending', value: lawyers.filter(l => l.status === 'Pending').length, color: 'text-yellow-600' },
          { label: 'Suspended', value: lawyers.filter(l => l.status === 'Suspended').length, color: 'text-red-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className={`text-display ${s.color} mt-xs`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card mb-lg">
        <div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search by name or specialization..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-sm">
            <Filter size={16} className="text-on-surface-variant" />
            {['All', 'Active', 'Pending', 'Suspended'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-md py-xs rounded-lg text-label-sm transition-colors ${filter === f ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
