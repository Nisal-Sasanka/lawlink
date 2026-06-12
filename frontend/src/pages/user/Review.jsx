import React, { useState } from 'react';
import { CheckCircle, User, Briefcase, CreditCard, FileText, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Review = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
