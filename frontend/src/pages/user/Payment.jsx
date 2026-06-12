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
<CheckCircle size={48} className="text-green-600" />
        </div>
        <h2 className="text-headline-lg text-on-surface mb-md">Payment Successful!</h2>
        <p className="text-body-lg text-on-surface-variant mb-xl">Your payment of <strong>₹1,999</strong> was received. You'll be redirected shortly...</p>
        <div className="bg-green-50 border border-green-200 rounded-xl p-lg w-full text-left">
          <p className="text-label-md text-green-700">Transaction ID: TXN-2024-LLK-00842</p>
          <p className="text-body-sm text-green-600 mt-xs">Standard Representation Package — Jun 08, 2024</p>
        </div>
      </div>
    );
  }
return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">Secure Payment</h1>
        <p className="text-body-md text-on-surface-variant mt-xs">Complete your payment to activate your legal package.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-xl">
        {/* Payment Form */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card">
            {/* Method Toggle */}
            <div className="flex gap-sm mb-xl">
              {[
                { id: 'card', label: '💳 Card' },
                { id: 'upi', label: '📱 UPI' },
                { id: 'netbanking', label: '🏦 Net Banking' },
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`flex-1 py-sm rounded-lg text-label-sm font-semibold transition-colors
                    ${method === m.id ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <form onSubmit={handlePay} className="space-y-md">
              {method === 'card' && (
                <>
                  <div>
                    <label className="text-label-sm text-on-surface-variant mb-xs block">Cardholder Name</label>
                    <input type="text" placeholder="Name as on card" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required />
                  </div>
                  <div>
                    <label className="text-label-sm text-on-surface-variant mb-xs block">Card Number</label>
                    <div className="relative">
                      <CreditCard size={18} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
                      <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} value={form.card} onChange={e => setForm({ ...form, card: e.target.value })}
                        className="w-full pl-10 pr-md border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required />
                    </div>
                  </div>
<div className="grid grid-cols-2 gap-md">
                    <div>
                      <label className="text-label-sm text-on-surface-variant mb-xs block">Expiry Date</label>
                      <input type="text" placeholder="MM / YY" maxLength={7} value={form.expiry} onChange={e => setForm({ ...form, expiry: e.target.value })}
                        className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required />
                    </div>
                    <div>
                      <label className="text-label-sm text-on-surface-variant mb-xs block">CVV</label>
                      <input type="password" placeholder="•••" maxLength={4} value={form.cvv} onChange={e => setForm({ ...form, cvv: e.target.value })}
                        className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required />
                    </div>
                  </div>
                </>
              )}
              {method === 'upi' && (
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">UPI ID</label>
                  <input type="text" placeholder="yourname@upi" value={form.upi} onChange={e => setForm({ ...form, upi: e.target.value })}
                    className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required />
                  <p className="text-body-sm text-on-surface-variant mt-xs">e.g., yourname@okaxis, yourname@paytm</p>
                </div>
              )}
              {method === 'netbanking' && (
                <div>
                  <label className="text-label-sm text-on-surface-variant mb-xs block">Select Your Bank</label>
                  <select className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary" required>
                    <option value="">Choose a bank...</option>
                    {['SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'Bank of Baroda', 'Punjab National Bank'].map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
              )}
