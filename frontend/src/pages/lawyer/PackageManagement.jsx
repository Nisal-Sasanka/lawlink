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
