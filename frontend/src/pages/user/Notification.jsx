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
