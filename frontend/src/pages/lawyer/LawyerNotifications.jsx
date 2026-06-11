import React, { useState } from 'react';
import { Bell, CheckCheck, Clock, User, Briefcase, Calendar, MessageSquare, CreditCard } from 'lucide-react';

const notifications = [
  {
    id: 1, type: 'case', icon: <Briefcase size={18} className="text-primary" />,
    title: 'New Case Assigned',
    message: 'You have been assigned to case CMP-006 — "Rental Agreement Breach" filed by Lakshmi Iyer. Please review the case details.',
    time: '1 hour ago', read: false, date: 'Today',
  },
  {
    id: 2, type: 'message', icon: <MessageSquare size={18} className="text-green-600" />,
    title: 'New Message from Client',
    message: 'John Doe sent a message: "Thank you for the update. I have uploaded the sale deed as requested."',
    time: '3 hours ago', read: false, date: 'Today',
  },
  {
    id: 3, type: 'hearing', icon: <Calendar size={18} className="text-blue-600" />,
    title: 'Hearing Reminder',
    message: 'Reminder: You have a court hearing for case CMP-001 on June 25, 2024 at 10:30 AM at District Court, Chennai.',
    time: '1 day ago', read: true, date: 'Yesterday',
  },
  {
    id: 4, type: 'payment', icon: <CreditCard size={18} className="text-purple-600" />,
    title: 'Payment Received',
    message: 'Your fee of ₹1,200 for case CMP-003 (Cheque Bounce) has been credited to your account.',
    time: '3 days ago', read: true, date: 'Jun 05, 2024',
  },
  {
    id: 5, type: 'review', icon: <User size={18} className="text-yellow-600" />,
    title: 'Client Left a Review',
    message: 'Ramesh Gupta gave you a 5-star review for case CMP-003. "Excellent guidance and professionalism!"',
    time: '5 days ago', read: true, date: 'Jun 03, 2024',
  },
];

const typeColors = {
  case: 'bg-primary/10',
  message: 'bg-green-50',
  hearing: 'bg-blue-50',
  payment: 'bg-purple-50',
  review: 'bg-yellow-50',
};

const LawyerNotifications = () => {
  const [items, setItems] = useState(notifications);
  const [filter, setFilter] = useState('All');

  const unread = items.filter(n => !n.read).length;
  const markAllRead = () => setItems(prev => prev.map(n => ({ ...n, read: true })));
  const markRead = (id) => setItems(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  const filtered = filter === 'All' ? items : filter === 'Unread' ? items.filter(n => !n.read) : items.filter(n => n.read);
  const grouped = filtered.reduce((acc, n) => { if (!acc[n.date]) acc[n.date] = []; acc[n.date].push(n); return acc; }, {});

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface flex items-center gap-md">
            Notifications
            {unread > 0 && <span className="bg-primary text-on-primary text-label-sm w-7 h-7 rounded-full flex items-center justify-center">{unread}</span>}
          </h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Stay on top of case assignments, client messages and hearings.</p>
        </div>
        {unread > 0 && (
          <button onClick={markAllRead} className="flex items-center gap-xs text-body-sm text-primary hover:underline">
            <CheckCheck size={16} /> Mark all as read
          </button>
        )}
      </div>

      <div className="flex gap-sm mb-xl">
        {['All', 'Unread', 'Read'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-lg py-sm rounded-lg text-label-sm font-semibold transition-colors
              ${filter === f ? 'bg-primary text-on-primary' : 'bg-white border border-surface-container-high text-on-surface-variant hover:bg-surface-container-low'}`}>
            {f} {f === 'Unread' && unread > 0 && `(${unread})`}
          </button>
        ))}
      </div>

      {Object.keys(grouped).length === 0 ? (
        <div className="bg-white border border-surface-container-high rounded-xl p-3xl text-center shadow-card">
          <Bell size={48} className="mx-auto text-on-surface-variant mb-lg opacity-30" />
          <p className="text-headline-sm text-on-surface-variant">No notifications</p>
        </div>
      ) : (
        <div className="space-y-xl">
          {Object.entries(grouped).map(([date, notifs]) => (
            <div key={date}>
              <p className="text-label-md text-on-surface-variant mb-md">{date}</p>
              <div className="space-y-sm">
                {notifs.map(n => (
                  <div key={n.id} onClick={() => markRead(n.id)}
                    className={`flex items-start gap-lg p-lg rounded-xl border cursor-pointer transition-all
                      ${!n.read ? 'bg-white border-primary/30 shadow-card' : 'bg-white border-surface-container-high opacity-70 hover:opacity-100'}`}>
                    <div className={`w-10 h-10 rounded-full ${typeColors[n.type]} flex items-center justify-center shrink-0`}>
                      {n.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-md">
                        <h4 className={`text-body-md ${!n.read ? 'font-semibold text-on-surface' : 'font-medium text-on-surface-variant'}`}>{n.title}</h4>
                        <div className="flex items-center gap-sm shrink-0">
                          {!n.read && <div className="w-2 h-2 rounded-full bg-primary" />}
                          <span className="text-body-sm text-on-surface-variant whitespace-nowrap">{n.time}</span>
                        </div>
                      </div>
                      <p className="text-body-sm text-on-surface-variant mt-xs leading-relaxed">{n.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LawyerNotifications;
