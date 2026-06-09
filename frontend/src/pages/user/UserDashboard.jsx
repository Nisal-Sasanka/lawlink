import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Scale, Bell, TrendingUp, Clock, CheckCircle, AlertTriangle, ArrowRight, User } from 'lucide-react';

const recentComplaints = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', category: 'Civil', status: 'In Review', date: 'Jun 01, 2024', lawyer: 'Adv. Priya Nair' },
  { id: 'CMP-002', title: 'Wrongful Termination', category: 'Labour', status: 'Open', date: 'Jun 04, 2024', lawyer: 'Unassigned' },
  { id: 'CMP-003', title: 'Consumer Fraud', category: 'Consumer', status: 'Resolved', date: 'May 28, 2024', lawyer: 'Adv. Rajesh Kumar' }, 
];
