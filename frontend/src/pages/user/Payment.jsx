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
