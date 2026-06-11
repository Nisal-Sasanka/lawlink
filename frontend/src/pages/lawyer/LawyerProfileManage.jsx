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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">My Profile</h1>
        <p className="text-body-md text-on-surface-variant mt-xs">Manage your professional profile visible to clients.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Left Column */}
        <div className="space-y-lg">
          {/* Avatar Card */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card text-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-headline-lg font-bold text-on-primary mx-auto mb-lg">PN</div>
            <h2 className="text-headline-sm text-on-surface">{profile.name}</h2>
            <p className="text-body-sm text-on-surface-variant mt-xs">{profile.specialization} Specialist</p>
            <div className="flex items-center justify-center gap-xs mt-sm text-body-sm text-on-surface-variant">
              <MapPin size={14} /> {profile.location}, {profile.state}
            </div>
            <div className="mt-md bg-green-50 border border-green-200 rounded-xl p-sm">
              <p className="text-label-sm text-green-700">✅ Verified Lawyer</p>
              <p className="text-body-sm text-green-600">{profile.barCouncilId}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-lg shadow-card">
            <h3 className="text-headline-sm text-on-surface mb-md">Performance</h3>
            <div className="space-y-md">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-sm">{s.icon}<span className="text-body-md text-on-surface">{s.label}</span></div>
                  <span className="text-body-md font-bold text-on-surface">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-lg">
            <p className="text-label-md text-primary mb-xs">Availability</p>
            <p className="text-body-md font-medium text-on-surface">{profile.availability}</p>
            <p className="text-label-md text-primary mt-md mb-xs">Consultation Fee</p>
            <p className="text-body-md font-medium text-on-surface">{profile.consultationFee} / session</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-lg">
          {/* Professional Info */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
            <div className="flex items-center justify-between mb-xl">
              <h3 className="text-headline-sm text-on-surface flex items-center gap-sm"><Briefcase size={18} className="text-primary" /> Professional Details</h3>
              {!editing ? (
                <button onClick={() => setEditing(true)} className="flex items-center gap-xs px-md py-xs rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container">
                  <Edit2 size={14} /> Edit
                </button>
              ) : (
                <div className="flex gap-sm">
                  <button onClick={() => setEditing(false)} className="flex items-center gap-xs px-md py-xs rounded-lg border border-outline-variant text-body-sm hover:bg-surface-container">
                    <X size={14} /> Cancel
                  </button>
                  <button onClick={() => { setProfile(draft); setEditing(false); }} className="flex items-center gap-xs px-md py-xs rounded-lg bg-primary text-on-primary text-body-sm">
                    <Save size={14} /> Save
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
              <Field label="Full Name" field="name" />
              <Field label="Specialization" field="specialization" />
              <Field label="Experience (years)" field="experience" type="number" />
              <Field label="Location" field="location" />
              <Field label="State" field="state" />
              <Field label="Languages" field="languages" />
              <Field label="Consultation Fee" field="consultationFee" />
              <Field label="Availability" field="availability" />
              <Field label="Education" field="education" fullWidth />
              <Field label="Professional Bio" field="bio" type="textarea" fullWidth />
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-xl"><Mail size={18} className="text-primary" /> Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="flex items-center gap-md bg-surface-container-low rounded-xl p-md">
                <Mail size={18} className="text-primary" />
                <div>
                  <p className="text-label-sm text-on-surface-variant">Email</p>
                  <p className="text-body-md font-medium text-on-surface">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-md bg-surface-container-low rounded-xl p-md">
                <Phone size={18} className="text-primary" />
                <div>
                  <p className="text-label-sm text-on-surface-variant">Phone</p>
                  <p className="text-body-md font-medium text-on-surface">{profile.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
            <h3 className="text-headline-sm text-on-surface flex items-center gap-sm mb-xl"><GraduationCap size={18} className="text-primary" /> Credentials & Documents</h3>
            <div className="space-y-sm">
              {[
                { label: 'Bar Council Certificate', status: 'Verified', color: 'text-green-600 bg-green-50' },
                { label: 'Law Degree Certificate', status: 'Verified', color: 'text-green-600 bg-green-50' },
                { label: 'Practice Certificate 2024', status: 'Pending Renewal', color: 'text-yellow-600 bg-yellow-50' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between bg-surface-container-low rounded-xl p-md">
                  <div className="flex items-center gap-sm">
                    <FileText size={18} className="text-primary" />
                    <span className="text-body-md text-on-surface">{doc.label}</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className={`text-label-sm px-sm py-xs rounded-full ${doc.color}`}>{doc.status}</span>
                    <button className="text-body-sm text-primary hover:underline">Re-upload</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfileManage;
