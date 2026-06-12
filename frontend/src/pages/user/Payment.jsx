import React, { useState } from 'react';
import { CreditCard, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('card');
  const [paid, setPaid] = useState(false);
  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvv: '', upi: '' });
  const handlePay = (e) => {
    e.preventDefault();
    setPaid(true);
    setTimeout(() => navigate('/user/upload'), 2000);
  };
  if (paid) {
    return (
      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center py-3xl text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-xl animate-pulse">
