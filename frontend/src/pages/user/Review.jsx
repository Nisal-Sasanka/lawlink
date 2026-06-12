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
