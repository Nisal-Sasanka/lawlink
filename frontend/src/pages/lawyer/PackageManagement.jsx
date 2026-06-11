import React, { useState } from 'react';
import { PlusCircle, Edit2, Trash2, CheckCircle, Clock, Star, TrendingUp, DollarSign } from 'lucide-react';

const initialPackages = [
  {
    id: 1, name: 'Basic Consultation', price: 499, duration: 'per session',
    features: ['30-minute call', 'Written summary', 'Email support (7 days)'],
    active: true, bookings: 12,
  },
  {
    id: 2, name: 'Standard Representation', price: 1999, duration: 'per case',
    features: ['Unlimited calls (30 days)', 'Court representation (3 hearings)', 'Document review', 'Priority support'],
    active: true, bookings: 8,
  },
  {
    id: 3, name: 'Premium Full Service', price: 4999, duration: 'per case',
    features: ['Dedicated service (90 days)', 'Unlimited hearings', 'All documents', '24/7 support', 'Legal opinion letter'],
    active: false, bookings: 2,
  },
];

const PackageManagement = () => {
  const [packages, setPackages] = useState(initialPackages);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', duration: 'per case', features: '' });

  const toggleActive = (id) => setPackages(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));

  const openEdit = (pkg) => {
    setEditItem(pkg);
    setForm({ name: pkg.name, price: pkg.price, duration: pkg.duration, features: pkg.features.join('\n') });
    setShowForm(true);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditItem(null);
    setForm({ name: '', price: '', duration: 'per case', features: '' });
  };

  const totalRevenue = packages.reduce((acc, p) => acc + p.price * p.bookings, 0);
  const totalBookings = packages.reduce((acc, p) => acc + p.bookings, 0);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Package Management</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Create and manage the service packages you offer to clients.</p>
        </div>
        <button onClick={() => { setEditItem(null); setForm({ name: '', price: '', duration: 'per case', features: '' }); setShowForm(true); }}
          className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md font-semibold hover:opacity-90 transition-opacity">
          <PlusCircle size={18} /> Add Package
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Packages', value: packages.length, icon: <Star size={20} className="text-primary" />, bg: 'bg-primary/5' },
          { label: 'Active', value: packages.filter(p => p.active).length, icon: <CheckCircle size={20} className="text-green-600" />, bg: 'bg-green-50' },
          { label: 'Total Bookings', value: totalBookings, icon: <TrendingUp size={20} className="text-blue-600" />, bg: 'bg-blue-50' },
          { label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: <DollarSign size={20} className="text-yellow-600" />, bg: 'bg-yellow-50' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-md`}>{s.icon}</div>
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className="text-headline-md font-bold text-on-surface mt-xs">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
        {packages.map(pkg => (
          <div key={pkg.id} className={`bg-white border-2 rounded-2xl p-xl shadow-card transition-all
            ${pkg.active ? 'border-surface-container-high hover:border-primary/40' : 'border-dashed border-surface-container-high opacity-60'}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-lg">
              <div>
                <h3 className="text-headline-sm text-on-surface">{pkg.name}</h3>
                <div className="flex items-baseline gap-xs mt-xs">
                  <span className="text-display font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                  <span className="text-body-sm text-on-surface-variant">{pkg.duration}</span>
                </div>
              </div>
              <span className={`text-label-sm px-sm py-xs rounded-full font-semibold ${pkg.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {pkg.active ? '● Active' : '○ Inactive'}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-sm mb-xl">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-start gap-sm text-body-sm text-on-surface">
                  <CheckCircle size={14} className="text-green-500 mt-xs shrink-0" /> {f}
                </li>
              ))}
            </ul>

            {/* Bookings */}
            <div className="bg-surface-container-low rounded-xl p-md mb-lg flex items-center justify-between">
              <div>
                <p className="text-label-sm text-on-surface-variant">Bookings</p>
                <p className="text-headline-sm font-bold text-on-surface">{pkg.bookings}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Revenue</p>
                <p className="text-headline-sm font-bold text-primary">₹{(pkg.price * pkg.bookings).toLocaleString()}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-sm">
              <button onClick={() => openEdit(pkg)} className="flex-1 flex items-center justify-center gap-xs py-sm rounded-xl border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">
                <Edit2 size={14} /> Edit
              </button>
              <button onClick={() => toggleActive(pkg.id)}
                className={`flex-1 flex items-center justify-center gap-xs py-sm rounded-xl text-body-sm transition-colors
                  ${pkg.active ? 'border border-red-200 text-red-500 hover:bg-red-50' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                {pkg.active ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button onClick={() => { setEditItem(null); setForm({ name: '', price: '', duration: 'per case', features: '' }); setShowForm(true); }}
          className="border-2 border-dashed border-surface-container-high rounded-2xl p-xl flex flex-col items-center justify-center gap-md hover:border-primary hover:bg-primary/5 transition-all group min-h-[200px]">
          <PlusCircle size={32} className="text-on-surface-variant group-hover:text-primary transition-colors" />
          <p className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors font-medium">Add New Package</p>
        </button>
      </div>

      {/* Edit / Create Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-lg" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-headline-md text-on-surface mb-xl">{editItem ? 'Edit Package' : 'Create New Package'}</h2>
            <div className="space-y-md">
              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Package Name *</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g., Standard Representation"
                  className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">Price (₹) *</label>
                  <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}
                    placeholder="e.g., 1999"
                    className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">Duration *</label>
                  <select value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}
                    className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary">
                    <option>per session</option>
                    <option>per case</option>
                    <option>per month</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Features (one per line) *</label>
                <textarea rows={5} value={form.features} onChange={e => setForm({ ...form, features: e.target.value })}
                  placeholder={"30-minute consultation call\nFull document review\nCourt representation"}
                  className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary resize-none" />
              </div>
            </div>
            <div className="flex gap-md justify-end mt-xl">
              <button onClick={() => setShowForm(false)} className="px-lg py-sm rounded-lg border border-outline-variant text-body-md hover:bg-surface-container transition-colors">Cancel</button>
              <button onClick={handleSave} className="px-lg py-sm rounded-lg bg-primary text-on-primary text-body-md hover:opacity-90 transition-opacity">
                {editItem ? 'Save Changes' : 'Create Package'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageManagement;
