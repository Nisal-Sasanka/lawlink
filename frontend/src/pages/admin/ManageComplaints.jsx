import React, { useState } from 'react';
import { Search, Eye, MessageSquare, Clock, CheckCircle, XCircle, AlertTriangle, Filter } from 'lucide-react';

const complaints = [
  { id: 'CMP-001', user: 'John Doe', userEmail: 'john.doe@email.com', title: 'Property Dispute with Neighbor', category: 'Civil', priority: 'High', status: 'Open', assignedTo: 'Adv. Priya Nair', date: 'Jun 01, 2024', description: 'I am facing a property boundary dispute with my neighbor who has encroached on my land. Need legal advice urgently.' },
  { id: 'CMP-002', user: 'Anita Rao', userEmail: 'anita.rao@email.com', title: 'Wrongful Termination from Job', category: 'Labour', priority: 'Medium', status: 'In Review', assignedTo: 'Adv. Kavitha Menon', date: 'Jun 03, 2024', description: 'My employer terminated me without proper notice and without any valid reason. Seeking legal help.' },
  { id: 'CMP-003', user: 'Ramesh Gupta', userEmail: 'ramesh.g@email.com', title: 'Consumer Fraud by Online Store', category: 'Consumer', priority: 'Low', status: 'Resolved', assignedTo: 'Adv. Rajesh Kumar', date: 'May 28, 2024', description: 'I was cheated by an online store that took money but never delivered goods and is now unreachable.' },
  { id: 'CMP-004', user: 'Sunita Patel', userEmail: 'sunita.p@email.com', title: 'Domestic Violence Case', category: 'Family', priority: 'High', status: 'Open', assignedTo: null, date: 'Jun 05, 2024', description: 'Experiencing domestic violence and need immediate legal assistance and protection order.' },
  { id: 'CMP-005', user: 'Arun Krishnan', userEmail: 'arun.k@email.com', title: 'Cheque Bounce Case', category: 'Criminal', priority: 'Medium', status: 'Closed', assignedTo: 'Adv. Arjun Das', date: 'May 20, 2024', description: 'A cheque issued to me by a business partner has bounced twice. Need to file a case under NI Act.' },
  { id: 'CMP-006', user: 'Lakshmi Iyer', userEmail: 'lakshmi.i@email.com', title: 'Rental Agreement Breach', category: 'Civil', priority: 'Low', status: 'In Review', assignedTo: 'Adv. Meena Sharma', date: 'Jun 04, 2024', description: 'My landlord is violating the rental agreement by demanding rent hike mid-tenancy.' },
];

const statusConfig = {
  'Open': { color: 'bg-blue-100 text-blue-700', icon: <Clock size={12} /> },
  'In Review': { color: 'bg-yellow-100 text-yellow-700', icon: <AlertTriangle size={12} /> },
  'Resolved': { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
  'Closed': { color: 'bg-gray-100 text-gray-600', icon: <XCircle size={12} /> },
};

const priorityColor = { High: 'text-red-600 bg-red-50', Medium: 'text-yellow-600 bg-yellow-50', Low: 'text-green-600 bg-green-50' };

const ManageComplaints = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = complaints.filter(c =>
    (statusFilter === 'All' || c.status === statusFilter) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.user.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()))
  );
