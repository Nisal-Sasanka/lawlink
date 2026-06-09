import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X, Shield, Clock, Briefcase } from 'lucide-react';

const UserProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    city: 'Chennai',
    state: 'Tamil Nadu',
    dob: '1990-05-14',
    gender: 'Male',
    address: '42, Gandhi Street, T. Nagar, Chennai - 600017',
    bio: 'A law-abiding citizen seeking justice through the right channels.',
  });
  
    const [draft, setDraft] = useState(profile);

  const handleSave = () => {
    setProfile(draft);
    setEditing(false);
  };

  const stats = [
    { label: 'Cases Filed', value: 3, icon: <Briefcase size={20} className="text-primary" /> },
    { label: 'Active Cases', value: 2, icon: <Clock size={20} className="text-yellow-600" /> },
    { label: 'Resolved', value: 1, icon: <Shield size={20} className="text-green-600" /> },
  ];
  const InfoField = ({ label, value, field, type = 'text' }) => (
    <div>
      <label className="text-label-sm text-on-surface-variant block mb-xs">{label}</label>
      {editing ? (
        <input
          type={type}
          value={draft[field]}
          onChange={e => setDraft({ ...draft, [field]: e.target.value })}
          className="w-full border border-outline-variant rounded-lg px-md py-sm text-body-md focus:outline-none focus:border-primary"
        />
      ) : (
        <p className="text-body-md text-on-surface font-medium">{value}</p>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">My Profile</h1>
        <p className="text-body-md text-on-surface-variant mt-xs">Manage your personal information and account settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Left: Avatar + Stats */}
        <div className="space-y-lg">
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card text-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-headline-lg font-bold text-on-primary mx-auto mb-lg">
              JD
            </div>
<h2 className="text-headline-sm text-on-surface">{profile.name}</h2>
            <p className="text-body-sm text-on-surface-variant mt-xs">Registered User</p>
            <div className="flex items-center justify-center gap-xs mt-sm text-body-sm text-on-surface-variant">
              <MapPin size={14} /> {profile.city}, {profile.state}
            </div>
            <div className="mt-lg pt-lg border-t border-surface-container-high">
              <p className="text-body-sm text-on-surface-variant italic">"{profile.bio}"</p>
            </div>
          </div>
          {/* Stats */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-lg shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Case Summary</h3>
            <div className="space-y-md">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-sm">
                    {s.icon}
                    <span className="text-body-md text-on-surface">{s.label}</span>
                  </div>
                  <span className="text-headline-sm font-bold text-on-surface">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Danger Zone */}
          <div className="bg-white border border-red-200 rounded-2xl p-lg shadow-card">
            <h3 className="text-headline-sm text-red-600 mb-md">Account</h3>
            <button className="w-full text-center text-body-sm text-red-500 hover:text-red-700 hover:underline transition-colors">
              Delete Account
            </button>
          </div>
        </div>
        {/* Right: Info */}
        <div className="lg:col-span-2 space-y-lg">
          {/* Personal Info */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
            <div className="flex items-center justify-between mb-xl">
              <h3 className="text-headline-sm text-on-surface flex items-center gap-sm">
                <User size={20} className="text-primary" /> Personal Information
              </h3>
              {!editing ? (
                <button onClick={() => setEditing(true)} className="flex items-center gap-xs px-md py-xs rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container transition-colors">
                  <Edit2 size={14} /> Edit
                </button>
              ) : (

