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
