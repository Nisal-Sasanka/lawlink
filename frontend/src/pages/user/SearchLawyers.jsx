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
return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">Find a Lawyer</h1>
        <p className="text-body-md text-on-surface-variant mt-xs">Browse verified legal professionals across India. All lawyers are Bar Council registered.</p>
      </div>     
      {/* Search & Filters */}
      <div className="bg-white border border-surface-container-high rounded-xl p-xl shadow-card mb-xl">
        <div className="flex flex-col gap-lg">

                {/* Search Bar */}
          <div className="relative">
            <Search size={18} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text" placeholder="Search by name, specialization, or city..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-md py-md border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* Spec Pills */}
          <div className="flex items-center gap-sm flex-wrap">
            <Filter size={16} className="text-on-surface-variant shrink-0" />
            {specializations.map(s => (
              <button key={s} onClick={() => setSpecFilter(s)}
                className={`px-md py-xs rounded-full text-label-sm font-semibold transition-colors
                  ${specFilter === s ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
                {s}
              </button>
            ))}
            <label className="flex items-center gap-xs cursor-pointer ml-auto">
              <input type="checkbox" checked={availOnly} onChange={e => setAvailOnly(e.target.checked)} className="accent-primary" />
              <span className="text-body-sm text-on-surface-variant">Available Only</span>
            </label>
          </div>
        </div>
      </div>
            {/* Results count */}
      <p className="text-body-md text-on-surface-variant mb-lg">{filtered.length} lawyers found</p>

      {/* Lawyer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
        {filtered.map(l => (
          <div key={l.id} className="bg-white border border-surface-container-high rounded-2xl p-xl shadow-card hover:shadow-lg transition-all hover:-translate-y-0.5">
            {/* Top */}
            <div className="flex items-start gap-md mb-lg">
              <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-headline-sm font-bold text-on-primary-container shrink-0">
                {l.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-xs">
                  <h3 className="text-headline-sm text-on-surface truncate">{l.name}</h3>
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${l.available ? 'bg-green-500' : 'bg-gray-300'}`} title={l.available ? 'Available' : 'Unavailable'} />
                </div>
                <p className="text-body-sm font-semibold text-primary">{l.spec}</p>
                <div className="flex items-center gap-xs mt-xs text-body-sm text-on-surface-variant">
                  <MapPin size={12} /> {l.location} • {l.experience}
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-body-sm text-on-surface-variant mb-lg line-clamp-2 leading-relaxed">{l.bio}</p>
            {/* Languages */}
            <div className="flex gap-xs flex-wrap mb-lg">
              {l.languages.map(lang => (
                <span key={lang} className="text-label-sm bg-surface-container text-on-surface-variant px-sm py-xs rounded">{lang}</span>
              ))}
            </div>
            {/* Stats */}
            <div className="flex items-center justify-between pt-md border-t border-surface-container-high mb-lg">
              <div className="text-center">
                <p className="text-label-sm text-on-surface-variant">Rating</p>
                <div className="flex items-center gap-xs text-yellow-500 mt-xs">
                  <Star size={14} fill="currentColor" />
                  <span className="text-body-md font-bold text-on-surface">{l.rating}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-label-sm text-on-surface-variant">Cases</p>
                <p className="text-body-md font-bold text-on-surface mt-xs">{l.cases}</p>
              </div>
              <div className="text-center">
                <p className="text-label-sm text-on-surface-variant">Reviews</p>
                <p className="text-body-md font-bold text-on-surface mt-xs">{l.reviews}</p>
              </div>
              <div className="text-center">
                <p className="text-label-sm text-on-surface-variant">Fee</p>
                <p className="text-body-sm font-bold text-primary mt-xs">{l.fee}</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-sm">
              <button onClick={() => setSelected(l)} className="flex-1 py-sm rounded-xl border border-outline-variant text-body-sm font-semibold hover:bg-surface-container transition-colors">
                View Profile
              </button>
              <button
                disabled={!l.available}
                onClick={() => navigate('/user/packages')}
                className={`flex-1 py-sm rounded-xl text-body-sm font-semibold transition-all flex items-center justify-center gap-xs
                  ${l.available ? 'bg-primary text-on-primary hover:opacity-90' : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed'}`}>
                {l.available ? <><CheckCircle size={14} /> Hire Now</> : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Profile Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-lg" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-lg mb-xl">
              <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-headline-md font-bold text-on-primary-container">
                {selected.avatar}
              </div>
              <div>
                <h2 className="text-headline-sm text-on-surface">{selected.name}</h2>
                <p className="text-body-md text-primary font-semibold">{selected.spec}</p>
                <div className="flex items-center gap-xs text-on-surface-variant text-body-sm mt-xs">
                  <MapPin size={14} /> {selected.location}
                </div>
                <div className={`flex items-center gap-xs mt-xs text-body-sm ${selected.available ? 'text-green-600' : 'text-gray-500'}`}>
                  <div className={`w-2 h-2 rounded-full ${selected.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                  {selected.available ? 'Available for new cases' : 'Not available'}
                </div>
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-xl">{selected.bio}</p>

            <div className="grid grid-cols-2 gap-md mb-xl">
              {[
                { label: 'Experience', value: selected.experience },
                { label: 'Cases Handled', value: selected.cases },
                { label: 'Rating', value: `${selected.rating} ⭐ (${selected.reviews} reviews)` },
                { label: 'Consultation Fee', value: selected.fee },
                { label: 'Languages', value: selected.languages.join(', ') },
              ].map((item, i) => (
                <div key={i} className={i === 4 ? 'col-span-2' : ''}>
                  <p className="text-label-sm text-on-surface-variant">{item.label}</p>
                  <p className="text-body-md text-on-surface font-medium mt-xs">{item.value}</p>
                </div>
              ))}
            </div>
