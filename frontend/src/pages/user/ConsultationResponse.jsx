import React, { useState } from 'react';
import { MessageSquare, Send, FileText, Clock, CheckCircle, User, Paperclip } from 'lucide-react';

const messages = [
  {
    id: 1, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Hello! I have reviewed the initial details of your property dispute case. Could you please share the original sale deed or title document for the property in question?',
    time: '10:15 AM, Jun 07', attachments: [],
  },
  {
    id: 2, from: 'user', sender: 'You', avatar: 'JD',
    text: 'Thank you for getting in touch. I have uploaded the sale deed under the documents section. Please find it there.',
    time: '11:30 AM, Jun 07', attachments: ['sale_deed.pdf'],
  },
  {
    id: 3, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Thank you! I have reviewed the sale deed. The encroachment is clearly documented. I will be filing for an injunction on your behalf. Our first hearing is scheduled for June 25, 2024. Please be available.',
    time: '3:45 PM, Jun 07', attachments: [],
  },
  {
    id: 4, from: 'lawyer', sender: 'Adv. Priya Nair', avatar: 'PN',
    text: 'Also, please try to get any witness statements from neighbors who may have observed the encroachment. This will strengthen our case considerably.',
    time: '3:48 PM, Jun 07', attachments: [],
  },
];
const ConsultationResponse = () => {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState(messages);

  const send = () => {
    if (!msg.trim()) return;
    setChat(prev => [...prev, {
      id: Date.now(), from: 'user', sender: 'You', avatar: 'JD',
      text: msg, time: 'Just now', attachments: [],
    }]);
    setMsg('');
  };

