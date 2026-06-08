import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Shield, Users, BookOpen, ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const features = [
  { icon: <Shield size={32} className="text-primary" />, title: 'Verified Lawyers', desc: 'Every lawyer on LawLink is Bar Council verified and background-checked for your safety.' },
  { icon: <Scale size={32} className="text-primary" />, title: 'Expert Legal Advice', desc: 'Get advice from specialists across Civil, Criminal, Family, Labour, and Corporate law.' },
  { icon: <BookOpen size={32} className="text-primary" />, title: 'Legal Knowledge Hub', desc: 'Access free articles and guides written by top legal professionals across India.' },
  { icon: <Users size={32} className="text-primary" />, title: 'Trusted by Thousands', desc: 'Join over 50,000 users who have successfully resolved their legal matters with LawLink.' },
];
