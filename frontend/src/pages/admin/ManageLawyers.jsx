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

      {/* Table */}
      <div className="bg-white border border-surface-container-high rounded-xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-surface-container-high">
              <tr>
                {['Lawyer', 'Specialization', 'Location', 'Cases', 'Rating', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-lg py-md text-label-md text-on-surface-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(lawyer => (
                <tr key={lawyer.id} className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                        {lawyer.avatar}
                      </div>
                      <div>
                        <p className="text-body-md font-semibold text-on-surface">{lawyer.name}</p>
                        <p className="text-body-sm text-on-surface-variant">{lawyer.experience} exp</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className="text-body-sm bg-surface-container px-sm py-xs rounded-lg text-on-surface-variant">{lawyer.specialization}</span>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs text-body-sm text-on-surface-variant">
                      <MapPin size={14} /> {lawyer.location}
                    </div>
                  </td>
                  <td className="px-lg py-md text-body-md font-semibold text-on-surface">{lawyer.cases}</td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-xs text-body-sm font-semibold text-yellow-600">
                      <Star size={14} fill="currentColor" /> {lawyer.rating}
                    </div>
                  </td>
                  <td className="px-lg py-md">
                    <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${statusColor[lawyer.status]}`}>{lawyer.status}</span>
                  </td>
                  <td className="px-lg py-md">
                    <div className="flex items-center gap-sm">
                      <button onClick={() => setSelected(lawyer)} className="p-xs rounded-lg text-primary hover:bg-surface-container transition-colors" title="View Details">
                        <Eye size={16} />
                      </button>
                      {lawyer.status === 'Pending' && (
                        <button className="p-xs rounded-lg text-green-600 hover:bg-green-50 transition-colors" title="Approve">
                          <CheckCircle size={16} />
                        </button>
                      )}
                      {lawyer.status !== 'Suspended' && (
                        <button className="p-xs rounded-lg text-red-500 hover:bg-red-50 transition-colors" title="Suspend">
                          <XCircle size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-lg py-md border-t border-surface-container-high text-body-sm text-on-surface-variant">
          Showing {filtered.length} of {lawyers.length} lawyers
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-lg" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-lg mb-xl">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-headline-sm font-bold text-on-primary-container">
                {selected.avatar}
              </div>
              <div>
                <h2 className="text-headline-sm text-on-surface">{selected.name}</h2>
                <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${statusColor[selected.status]}`}>{selected.status}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-md mb-xl">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: selected.email },
                { icon: <Phone size={16} />, label: 'Phone', value: selected.phone },
                { icon: <Briefcase size={16} />, label: 'Specialization', value: selected.specialization },
                { icon: <MapPin size={16} />, label: 'Location', value: selected.location },
                { icon: <Star size={16} />, label: 'Rating', value: `${selected.rating} / 5.0` },
                { icon: <Briefcase size={16} />, label: 'Cases Handled', value: selected.cases },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-sm">
                  <span className="text-primary mt-xs">{item.icon}</span>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">{item.label}</p>
                    <p className="text-body-sm text-on-surface font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-md justify-end">
              <button onClick={() => setSelected(null)} className="px-lg py-sm rounded-lg border border-outline-variant text-body-md hover:bg-surface-container transition-colors">Close</button>
              {selected.status === 'Pending' && (
                <button className="px-lg py-sm rounded-lg bg-primary text-on-primary text-body-md hover:bg-primary-container transition-colors">Approve Lawyer</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageLawyers;
