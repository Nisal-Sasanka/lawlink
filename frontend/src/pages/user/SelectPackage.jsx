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

