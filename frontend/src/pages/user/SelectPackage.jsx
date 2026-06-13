import React, { useState } from 'react';
import { Check, Star, Zap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const packages = [
  {
    id: 'basic',
    name: 'Basic Consultation',
    price: '₹499',
    period: 'per case',
    description: 'Ideal for simple legal queries and initial consultations.',
    features: [
      'One 30-min consultation call',
      'Document review (up to 3)',
      'Written legal advice summary',
      'Email support for 7 days',
    ],
    icon: <Shield size={32} className="text-secondary" />,
    color: 'border-outline-variant',
    badge: null,
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard Representation',
    price: '₹1,999',
    period: 'per case',
    description: 'Full legal representation for most civil and family matters.',
    features: [
      'Unlimited consultations (30 days)',
      'Full document review',
      'Court representation (up to 3 hearings)',
      'Priority email & phone support',
      'Case strategy planning session',
    ],
    icon: <Zap size={32} className="text-primary" />,
    color: 'border-primary',
    badge: 'Most Popular',
    recommended: true,
  },
  {

    id: 'premium',
    name: 'Premium Full Service',
    price: '₹4,999',
    period: 'per case',
    description: 'Comprehensive legal support for complex, long-running cases.',
    features: [
      'Dedicated senior lawyer assigned',
      'Unlimited consultations (90 days)',
      'Full document drafting & review',
      'Unlimited court representations',
      '24/7 WhatsApp support',
      'Legal opinion letter',
      'Post-case follow-up (30 days)',
    ],
    icon: <Star size={32} className="text-yellow-500" />,
    color: 'border-yellow-400',
    badge: 'Best Value',
    recommended: false,
  },
];
const SelectPackage = () => {
  const [selected, setSelected] = useState('standard');
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-2xl">
        <h1 className="text-headline-lg text-on-surface">Choose a Legal Package</h1>
        <p className="text-body-lg text-on-surface-variant mt-md">Select the package that best fits your legal needs. All packages include access to verified, experienced lawyers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
        {packages.map(pkg => (
          <div
            key={pkg.id}
            onClick={() => setSelected(pkg.id)}
            className={`relative bg-white rounded-2xl p-xl cursor-pointer transition-all duration-200 border-2 shadow-card hover:shadow-lg
              ${selected === pkg.id ? `${pkg.color} shadow-lg scale-[1.02]` : 'border-surface-container-high'}`}
          >
            {pkg.badge && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-md py-xs rounded-full text-label-sm font-bold
                ${pkg.id === 'standard' ? 'bg-primary text-on-primary' : 'bg-yellow-400 text-yellow-900'}`}>
                {pkg.badge}
              </div>
            )}
