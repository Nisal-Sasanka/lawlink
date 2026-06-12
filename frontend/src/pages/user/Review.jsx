import React, { useState } from 'react';
import { CheckCircle, User, Briefcase, CreditCard, FileText, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Review = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center py-3xl">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-xl animate-bounce">
<CheckCircle size={56} className="text-green-600" />
        </div>
        <h2 className="text-headline-lg text-on-surface mb-md">Case Submitted!</h2>
        <p className="text-body-lg text-on-surface-variant mb-xl">
          Your case has been successfully submitted. A lawyer will be assigned to your case within 24 hours. You will receive a notification once assigned.
        </p>
<div className="bg-white border border-surface-container-high rounded-xl p-xl w-full text-left shadow-card mb-xl">
          <div className="flex items-center justify-between mb-md">
            <span className="text-label-md text-on-surface-variant">Case Reference ID</span>
            <span className="text-label-md font-bold text-primary bg-primary/10 px-md py-xs rounded">CMP-2024-00847</span>
          </div>
          <div className="space-y-sm text-body-sm text-on-surface-variant">
            <div className="flex justify-between"><span>Status</span><span className="text-blue-600 font-medium">Open — Awaiting Assignment</span></div>
            <div className="flex justify-between"><span>Package</span><span className="font-medium text-on-surface">Standard Representation</span></div>
            <div className="flex justify-between"><span>Submitted</span><span className="font-medium text-on-surface">Jun 08, 2024</span></div>
          </div>
        </div>
        <button onClick={() => navigate('/user')} className="px-2xl py-md rounded-xl bg-primary text-on-primary text-body-lg font-semibold hover:opacity-90 transition-opacity">
          Go to Dashboard
