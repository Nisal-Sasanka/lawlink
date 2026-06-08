import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Shield, Users, BookOpen, ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const features = [
  { icon: <Shield size={32} className="text-primary" />, title: 'Verified Lawyers', desc: 'Every lawyer on LawLink is Bar Council verified and background-checked for your safety.' },
  { icon: <Scale size={32} className="text-primary" />, title: 'Expert Legal Advice', desc: 'Get advice from specialists across Civil, Criminal, Family, Labour, and Corporate law.' },
  { icon: <BookOpen size={32} className="text-primary" />, title: 'Legal Knowledge Hub', desc: 'Access free articles and guides written by top legal professionals across India.' },
  { icon: <Users size={32} className="text-primary" />, title: 'Trusted by Thousands', desc: 'Join over 50,000 users who have successfully resolved their legal matters with LawLink.' },
];

const lawyers = [
  { name: 'Adv.Mangaleswaran Pavithar', spec: 'Civil Law', rating: 4.8, cases: 48, city: 'Colombo', avatar: 'PN' },
  { name: 'Adv.Kavindu chamith', spec: 'Family Law', rating: 4.9, cases: 67, city: 'Kandy', avatar: 'MS' },
  { name: 'Adv. Rajesh Kumar', spec: 'Criminal Law', rating: 4.5, cases: 31, city: 'Trincomalee', avatar: 'RK' },
];

const testimonials = [
  { name: 'Sundar R.', location: 'Colombo', text: 'LawLink helped me resolve a property dispute that had been going on for 5 years. I found the right lawyer within days!', rating: 5 },
  { name: 'Anjali M.', location: 'Kandy', text: 'The consultation process was seamless and affordable. Highly recommend to anyone facing a family law issue.', rating: 5 },
  { name: 'Karthik S.', location: 'Batticaloa', text: 'Professional, quick, and effective. My labour case was handled with great expertise.', rating: 4 },
];

const Home = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-surface-container-high shadow-sm">
        <div className="max-w-7xl mx-auto px-lg flex items-center justify-between h-16">
          <Link to="/" className="text-headline-sm font-bold text-primary no-underline flex items-center gap-sm">
            <Scale size={28} className="text-primary" /> LawLink
          </Link>
          <div className="hidden md:flex items-center gap-xl">
            <a href="#features" className="text-body-md text-on-surface-variant hover:text-primary transition-colors no-underline">Features</a>
            <a href="#lawyers" className="text-body-md text-on-surface-variant hover:text-primary transition-colors no-underline">Lawyers</a>
            <a href="#testimonials" className="text-body-md text-on-surface-variant hover:text-primary transition-colors no-underline">Reviews</a>
          </div>
          <div className="hidden md:flex items-center gap-sm">
            <Link to="/login" className="px-lg py-sm rounded-lg border border-primary text-primary text-body-md no-underline hover:bg-primary/5 transition-colors">Login</Link>
            <Link to="/register" className="px-lg py-sm rounded-lg bg-primary text-on-primary text-body-md no-underline hover:opacity-90 transition-opacity">Get Started</Link>
          </div>
          <button className="md:hidden p-sm rounded-lg hover:bg-surface-container" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-surface-container-high px-lg py-md space-y-sm">
            <Link to="/login" className="block px-md py-sm rounded-lg text-body-md text-on-surface hover:bg-surface-container no-underline">Login</Link>
            <Link to="/register" className="block px-md py-sm rounded-lg bg-primary text-on-primary text-body-md no-underline text-center">Get Started</Link>
          </div>
        )}
      </nav>
