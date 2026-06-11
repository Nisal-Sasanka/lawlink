import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X, Briefcase, Star, Award, GraduationCap, FileText } from 'lucide-react';

const LawyerProfileManage = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Adv. Priya Nair',
    email: 'priya.nair@lawlink.in',
    phone: '+91 98400 11223',
    barCouncilId: 'BCI-TN-2012-04521',
    specialization: 'Civil Law',
    experience: '12',
    location: 'Chennai',
    state: 'Tamil Nadu',
    languages: 'English, Tamil, Hindi',
    education: 'LL.B, Government Law College, Chennai (2011)',
    bio: 'A dedicated civil law advocate with over 12 years of experience specializing in property disputes, contract law, and injunctions. Known for client-first approach and high success rate.',
    consultationFee: '₹1,000',
    availability: 'Mon-Fri, 10AM–5PM',
  });
  const [draft, setDraft] = useState(profile);

  const stats = [
    { label: 'Cases Handled', value: '48', icon: <Briefcase size={18} className="text-primary" /> },
    { label: 'Success Rate', value: '87%', icon: <Award size={18} className="text-green-600" /> },
    { label: 'Rating', value: '4.8 ⭐', icon: <Star size={18} className="text-yellow-500" /> },
    { label: 'Reviews', value: '36', icon: <FileText size={18} className="text-blue-600" /> },
  ];

  const Field = ({ label, field, type = 'text', fullWidth = false }) => (
    <div className={fullWidth ? 'col-span-2' : ''}>
      <label className="text-label-sm text-on-surface-variant block mb-xs">{label}</label>
      {editing ? (
        type === 'textarea' ? (
          <textarea rows={3} value={draft[field]} onChange={e => setDraft({ ...draft, [field]: e.target.value })}
            className="w-full border border-outline-variant rounded-lg px-md py-sm text-body-md focus:outline-none focus:border-primary resize-none" />
        ) : (
          <input type={type} value={draft[field]} onChange={e => setDraft({ ...draft, [field]: e.target.value })}
            className="w-full border border-outline-variant rounded-lg px-md py-sm text-body-md focus:outline-none focus:border-primary" />
        )
      ) : (
        <p className="text-body-md text-on-surface font-medium">{profile[field]}</p>
      )}
    </div>
    );
