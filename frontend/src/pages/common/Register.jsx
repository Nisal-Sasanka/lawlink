import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Eye, EyeOff, CheckCircle, User, Briefcase, Shield } from 'lucide-react';

const roles = [
  { value: 'user', label: 'Client / User', icon: <User size={22} />, desc: 'I need legal help and want to file complaints or find a lawyer.' },
  { value: 'lawyer', label: 'Lawyer', icon: <Briefcase size={22} />, desc: 'I am a verified advocate looking to offer my legal services.' },
];

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    barCouncilId: '', specialization: '', experience: '',
  });
  const [agreed, setAgreed] = useState(false);

  const update = (f, v) => setForm(prev => ({ ...prev, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('lawlink_role', role);
    navigate(role === 'lawyer' ? '/lawyer' : '/user');
  };

  return (
    <div className="min-h-screen flex bg-surface-container-low">
      {/* Left Panel */}
      <div className="hidden lg:flex w-[420px] shrink-0 bg-gradient-to-br from-primary via-primary-container to-[#1a2f7a] flex-col justify-between p-3xl text-on-primary">
        <div className="flex items-center gap-sm">
          <Scale size={28} />
          <span className="text-headline-sm font-bold">LawLink</span>
        </div>
        <div>
          <h2 className="text-headline-lg font-bold mb-lg">Join India's Most Trusted Legal Platform</h2>
          <div className="space-y-lg">
            {[
              { icon: '⚖️', text: 'Access 1,500+ verified lawyers across India' },
              { icon: '📋', text: 'File and track legal complaints seamlessly' },
              { icon: '🔒', text: 'Secure, encrypted platform for sensitive matters' },
              { icon: '✅', text: '75%+ case resolution rate' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-md text-body-md text-on-primary/90">
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-body-sm text-on-primary/50">© 2024 LawLink. All rights reserved.</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex justify-center items-center p-lg overflow-y-auto">
        <div className="w-full max-w-[520px]">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-sm mb-xl">
            <Scale size={24} className="text-primary" />
            <span className="text-headline-sm font-bold text-primary">LawLink</span>
          </div>

          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
            <div className="mb-xl">
              <h2 className="text-headline-lg text-on-surface">Create your account</h2>
              <p className="text-body-md text-on-surface-variant mt-xs">Join LawLink and get started for free.</p>
            </div>

            {/* Role Selector */}
            <div className="grid grid-cols-2 gap-sm mb-xl">
              {roles.map(r => (
                <div key={r.value} onClick={() => setRole(r.value)}
                  className={`p-lg rounded-xl border-2 cursor-pointer transition-all
                    ${role === r.value ? 'border-primary bg-primary/5' : 'border-surface-container-high hover:border-primary/30'}`}>
                  <div className={`mb-sm ${role === r.value ? 'text-primary' : 'text-on-surface-variant'}`}>{r.icon}</div>
                  <p className={`text-label-md font-bold ${role === r.value ? 'text-primary' : 'text-on-surface'}`}>{r.label}</p>
                  <p className="text-body-sm text-on-surface-variant mt-xs leading-snug">{r.desc}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-md">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">Full Name *</label>
                  <input type="text" placeholder={role === 'lawyer' ? 'Adv. Your Name' : 'Your full name'}
                    value={form.name} onChange={e => update('name', e.target.value)} required
                    className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 43210"
                    value={form.phone} onChange={e => update('phone', e.target.value)} required
                    className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                </div>
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Email Address *</label>
                <input type="email" placeholder="you@email.com"
                  value={form.email} onChange={e => update('email', e.target.value)} required
                  className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
              </div>

              {/* Lawyer-specific fields */}
              {role === 'lawyer' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md p-lg bg-primary/5 border border-primary/20 rounded-xl">
                  <div>
                    <label className="text-label-sm text-on-surface-variant mb-xs block">Bar Council ID *</label>
                    <input type="text" placeholder="BCI-TN-XXXX-XXXXX"
                      value={form.barCouncilId} onChange={e => update('barCouncilId', e.target.value)} required
                      className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="text-label-sm text-on-surface-variant mb-xs block">Experience (years) *</label>
                    <input type="number" placeholder="e.g., 8"
                      value={form.experience} onChange={e => update('experience', e.target.value)} required
                      className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-label-sm text-on-surface-variant mb-xs block">Specialization *</label>
                    <select value={form.specialization} onChange={e => update('specialization', e.target.value)} required
                      className="w-full border border-outline-variant rounded-xl px-md py-sm text-body-md focus:outline-none focus:border-primary transition-all">
                      <option value="">Select your specialization...</option>
                      {['Civil Law', 'Criminal Law', 'Family Law', 'Labour Law', 'Property Law', 'Corporate Law', 'Consumer Law'].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
