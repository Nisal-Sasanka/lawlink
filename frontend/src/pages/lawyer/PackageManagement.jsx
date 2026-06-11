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
