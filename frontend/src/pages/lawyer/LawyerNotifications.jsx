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
