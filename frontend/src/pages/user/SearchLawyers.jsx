import React, { useState } from 'react';
import { Search, Star, MapPin, Briefcase, Filter, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const lawyers = [
  { id: 1, name: 'Adv. Priya Nair', spec: 'Civil Law', experience: '12 yrs', location: 'Chennai', rating: 4.8, reviews: 36, cases: 48, fee: '₹1,000/session', available: true, languages: ['English', 'Tamil'], avatar: 'PN', bio: 'Specializes in property disputes, injunctions, and contract law. Known for swift resolution strategies.' },
  { id: 2, name: 'Adv. Rajesh Kumar', spec: 'Criminal Law', experience: '8 yrs', location: 'Bangalore', rating: 4.5, reviews: 22, cases: 31, fee: '₹800/session', available: true, languages: ['English', 'Kannada', 'Hindi'], avatar: 'RK', bio: 'Experienced criminal defence attorney with strong track record in bail hearings and FIR cases.' },
  { id: 3, name: 'Adv. Meena Sharma', spec: 'Family Law', experience: '15 yrs', location: 'Mumbai', rating: 4.9, reviews: 58, cases: 67, fee: '₹1,200/session', available: true, languages: ['English', 'Hindi', 'Marathi'], avatar: 'MS', bio: 'Senior family law advocate with deep expertise in divorce, child custody, and domestic violence cases.' },
  { id: 4, name: 'Adv. Arjun Das', spec: 'Property Law', experience: '9 yrs', location: 'Kolkata', rating: 4.6, reviews: 29, cases: 39, fee: '₹900/session', available: false, languages: ['English', 'Bengali'], avatar: 'AD', bio: 'Real estate and property law specialist with extensive knowledge of land acquisition laws.' },
  { id: 5, name: 'Adv. Kavitha Menon', spec: 'Labour Law', experience: '6 yrs', location: 'Hyderabad', rating: 4.0, reviews: 14, cases: 18, fee: '₹600/session', available: true, languages: ['English', 'Telugu'], avatar: 'KM', bio: 'Labour law expert focused on wrongful termination, wage disputes, and workplace harassment cases.' },
  { id: 6, name: 'Adv. Suresh Pillai', spec: 'Corporate Law', experience: '10 yrs', location: 'Delhi', rating: 4.2, reviews: 18, cases: 22, fee: '₹1,500/session', available: true, languages: ['English', 'Hindi', 'Malayalam'], avatar: 'SP', bio: 'Corporate attorney specializing in business contracts, IP law, mergers, and startup legal compliance.' },
];
const specializations = ['All', 'Civil Law', 'Criminal Law', 'Family Law', 'Labour Law', 'Property Law', 'Corporate Law'];

const SearchLawyers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [specFilter, setSpecFilter] = useState('All');
  const [availOnly, setAvailOnly] = useState(false);
  const [selected, setSelected] = useState(null);
const filtered = lawyers.filter(l => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.spec.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specFilter === 'All' || l.spec === specFilter;
    const matchAvail = !availOnly || l.available;
    return matchSearch && matchSpec && matchAvail;
  });

