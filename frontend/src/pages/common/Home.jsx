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
