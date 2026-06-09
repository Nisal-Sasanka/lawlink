import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Scale, Bell, TrendingUp, Clock, CheckCircle, AlertTriangle, ArrowRight, User } from 'lucide-react';

const recentComplaints = [
  { id: 'CMP-001', title: 'Property Dispute with Neighbor', category: 'Civil', status: 'In Review', date: 'Jun 01, 2024', lawyer: 'Adv. Priya Nair' },
  { id: 'CMP-002', title: 'Wrongful Termination', category: 'Labour', status: 'Open', date: 'Jun 04, 2024', lawyer: 'Unassigned' },
  { id: 'CMP-003', title: 'Consumer Fraud', category: 'Consumer', status: 'Resolved', date: 'May 28, 2024', lawyer: 'Adv. Rajesh Kumar' }, 
];
const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
};

const UserDashboard = () => {
  const navigate = useNavigate();


