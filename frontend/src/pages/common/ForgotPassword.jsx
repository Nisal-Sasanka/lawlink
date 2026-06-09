import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, ArrowLeft, CheckCircle, Eye, EyeOff } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('email'); // 'email' | 'sent' | 'reset'
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [done, setDone] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setStep('sent');
  };

  const handleOtp = (e) => {
    e.preventDefault();
    setStep('reset');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDone(true);
  };

  const updateOtp = (i, val) => {
    if (val.length > 1) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-container-low p-lg">
        <div className="w-full max-w-md bg-white border border-surface-container-high rounded-2xl p-xl shadow-card text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-xl">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h2 className="text-headline-lg text-on-surface mb-md">Password Reset!</h2>
          <p className="text-body-md text-on-surface-variant mb-xl">Your password has been successfully updated. You can now log in with your new password.</p>
          <Link to="/login" className="no-underline">
            <button className="w-full py-md rounded-xl bg-primary text-on-primary text-body-lg font-semibold hover:opacity-90 transition-opacity">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-surface-container-low">
      {/* Left Branding */}
      <div className="hidden lg:flex w-[380px] shrink-0 bg-gradient-to-br from-primary to-primary-container flex-col justify-between p-3xl text-on-primary">
        <div className="flex items-center gap-sm">
          <Scale size={28} />
          <span className="text-headline-sm font-bold">LawLink</span>
        </div>
        <div>
          <h2 className="text-headline-md font-bold mb-md">Secure Account Recovery</h2>
          <p className="text-body-md text-on-primary/80 leading-relaxed">
            Don't worry — it happens to the best of us. We'll help you safely recover your LawLink account in just a few steps.
          </p>
          <div className="mt-xl space-y-md">
            {['Enter your registered email', 'Get a 6-digit OTP', 'Set a new secure password'].map((s, i) => (
              <div key={i} className="flex items-center gap-md">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-label-sm font-bold">{i + 1}</div>
                <span className="text-body-md text-on-primary/80">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-body-sm text-on-primary/50">© 2024 LawLink</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-lg">
        <div className="w-full max-w-md">
          {/* Step Indicator */}
          <div className="flex items-center gap-sm mb-xl">
            {['email', 'sent', 'reset'].map((s, i) => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-bold transition-all
                  ${step === s || (s === 'email' && step === 'sent') || (s === 'email' && step === 'reset') || (s === 'sent' && step === 'reset')
                    ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                  {i + 1}
                </div>
                {i < 2 && <div className={`flex-1 h-0.5 ${(s === 'email' && (step === 'sent' || step === 'reset')) || (s === 'sent' && step === 'reset') ? 'bg-primary' : 'bg-surface-container-high'}`} />}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card">
