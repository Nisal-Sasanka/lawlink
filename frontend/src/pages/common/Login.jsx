import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Eye, EyeOff, Mail, Lock, User, Briefcase, Shield } from 'lucide-react';

const roles = [
  { value: 'user', label: 'Client', icon: <User size={20} />, desc: 'Login as a user', path: '/user' },
  { value: 'lawyer', label: 'Lawyer', icon: <Briefcase size={20} />, desc: 'Login as a lawyer', path: '/lawyer' },
  { value: 'admin', label: 'Admin', icon: <Shield size={20} />, desc: 'Admin console', path: '/admin' },
];

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('lawlink_role', role);
    setTimeout(() => {
      const r = roles.find(r => r.value === role);
      navigate(r?.path || '/user');
    }, 800);
  };

  return (
    <div className="min-h-screen flex bg-surface-container-low">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex w-[420px] shrink-0 bg-gradient-to-br from-primary via-primary-container to-[#1a2f7a] flex-col justify-between p-3xl text-on-primary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

        <div className="relative z-10 flex items-center gap-sm">
          <Scale size={28} />
          <span className="text-headline-sm font-bold">LawLink</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-headline-lg font-bold mb-md leading-tight">
            Access Your Legal Dashboard
          </h2>
          <p className="text-body-lg text-on-primary/80 mb-xl leading-relaxed">
            Manage your cases, connect with lawyers, and track your legal journey — all in one place.
          </p>
          <div className="space-y-md">
            {[
              { icon: '🔒', text: 'Bank-grade 256-bit SSL encryption' },
              { icon: '✅', text: 'Verified legal professionals' },
              { icon: '📱', text: 'Available 24/7, anywhere in India' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-md">
                <span className="text-xl">{item.icon}</span>
                <span className="text-body-md text-on-primary/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-lg backdrop-blur-sm">
            <p className="text-body-sm text-on-primary/70 italic mb-sm">
              "LawLink helped me find the right lawyer within 2 days. My property case was resolved in 3 months!"
            </p>
            <p className="text-label-md text-on-primary font-semibold">— Sundar R., Chennai</p>
          </div>
        </div>
      </div>
