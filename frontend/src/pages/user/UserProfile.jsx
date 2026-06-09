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

