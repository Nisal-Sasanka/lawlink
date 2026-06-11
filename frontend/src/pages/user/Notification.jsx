import React, { useState } from 'react';
import { Bell, CheckCheck, Clock, Briefcase, MessageSquare, CreditCard, User } from 'lucide-react';

const notifications = [
  {
    id: 1, type: 'lawyer', icon: <User size={18} className="text-primary" />,
    title: 'Lawyer Assigned to Your Case',
    message: 'Adv. Priya Nair has been assigned to your case "Property Dispute with Neighbor" (CMP-001).',
    time: '2 hours ago', read: false, date: 'Today'
  },
  {
    id: 2, type: 'case', icon: <Briefcase size={18} className="text-blue-600" />,
    title: 'Case Status Updated',
    message: 'Your case CMP-001 is now "In Review". Your lawyer has started reviewing your documents.',
    time: '5 hours ago', read: false, date: 'Today'
  },
  {
    id: 3, type: 'message', icon: <MessageSquare size={18} className="text-green-600" />,
    title: 'New Message from Lawyer',
    message: 'Adv. Priya Nair sent you a message: "Please share the original sale deed for the property. It will strengthen your case."',
    time: '1 day ago', read: true, date: 'Yesterday'
  },
  {
    id: 4, type: 'payment', icon: <CreditCard size={18} className="text-purple-600" />,
    title: 'Payment Confirmed',
    message: 'Your payment of ₹1,999 for the Standard Representation Package was successfully processed. Transaction ID: TXN-2024-LLK-00842.',
    time: '2 days ago', read: true, date: 'Jun 06, 2024'
  },
  {
    id: 5, type: 'case', icon: <Clock size={18} className="text-yellow-600" />,
    title: 'Hearing Scheduled',
    message: 'A court hearing has been scheduled for your case CMP-001 on June 25, 2024 at 10:30 AM at District Court, Chennai.',
    time: '3 days ago', read: true, date: 'Jun 05, 2024'
  },
  {
    id: 6, type: 'case', icon: <CheckCheck size={18} className="text-green-600" />,
    title: 'Case CMP-003 Resolved',
    message: 'Your earlier case "Consumer Fraud by Online Store" has been officially marked as Resolved. Congratulations!',
    time: '1 week ago', read: true, date: 'Jun 01, 2024'
  },
];

const typeColors = {
  lawyer: 'bg-primary/10',
  case: 'bg-blue-50',
  message: 'bg-green-50',
  payment: 'bg-purple-50',
};

const Notification = () => {
  const [items, setItems] = useState(notifications);
  const [filter, setFilter] = useState('All');

  const unread = items.filter(n => !n.read).length;

  const markAllRead = () => setItems(prev => prev.map(n => ({ ...n, read: true })));
  const markRead = (id) => setItems(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  const filtered = filter === 'All' ? items : filter === 'Unread' ? items.filter(n => !n.read) : items.filter(n => n.read);

  const grouped = filtered.reduce((acc, n) => {
    if (!acc[n.date]) acc[n.date] = [];
    acc[n.date].push(n);
    return acc;
  }, {});
return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface flex items-center gap-md">
            Notifications
            {unread > 0 && (
              <span className="bg-primary text-on-primary text-label-sm w-7 h-7 rounded-full flex items-center justify-center">{unread}</span>
            )}
          </h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Stay updated on your cases, lawyer assignments and payments.</p>
        </div>
        {unread > 0 && (
          <button onClick={markAllRead} className="flex items-center gap-xs text-body-sm text-primary hover:underline">
            <CheckCheck size={16} /> Mark all as read
          </button>
        )}
      </div>
      {/* Filter */}
      <div className="flex gap-sm mb-xl">
        {['All', 'Unread', 'Read'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-lg py-sm rounded-lg text-label-sm font-semibold transition-colors
              ${filter === f ? 'bg-primary text-on-primary' : 'bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container-low'}`}>
            {f} {f === 'Unread' && unread > 0 && `(${unread})`}
          </button>
        ))}
      </div>

      {/* Notifications */}
      {Object.keys(grouped).length === 0 ? (
        <div className="bg-white border border-surface-container-high rounded-xl p-3xl text-center shadow-card">
          <Bell size={48} className="mx-auto text-on-surface-variant mb-lg opacity-30" />
          <p className="text-headline-sm text-on-surface-variant">No notifications</p>
        </div>
      ) : (
