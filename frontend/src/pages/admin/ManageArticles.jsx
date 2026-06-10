import React, { useState } from 'react';
import { PlusCircle, Edit2, Trash2, Eye, Search, Clock, CheckCircle, XCircle } from 'lucide-react';

const articles = [
  { id: 1, title: 'Understanding Your Rights in a Property Dispute', category: 'Civil Law', author: 'Admin', status: 'Published', date: 'Jun 01, 2024', views: 1420, excerpt: 'Property disputes are among the most common legal issues. This article explains the key rights every property owner should know...' },
  { id: 2, title: 'What to Do If You Face Wrongful Termination', category: 'Labour Law', author: 'Adv. Priya Nair', status: 'Published', date: 'May 28, 2024', views: 980, excerpt: 'Wrongful termination can have severe financial and emotional consequences. Here is a step-by-step guide on what to do...' },
  { id: 3, title: 'Guide to Filing a Consumer Complaint in India', category: 'Consumer Law', author: 'Admin', status: 'Draft', date: 'Jun 05, 2024', views: 0, excerpt: 'Consumer protection laws in India empower buyers against fraud and defective products. Learn how to file a complaint...' },
  { id: 4, title: 'Domestic Violence Laws: Know Your Protection', category: 'Family Law', author: 'Adv. Meena Sharma', status: 'Published', date: 'May 15, 2024', views: 2340, excerpt: 'The Protection of Women from Domestic Violence Act, 2005 offers comprehensive protection. Here is what you need to know...' },
  { id: 5, title: 'Cheque Bounce: Legal Remedies Under Section 138 NI Act', category: 'Criminal Law', author: 'Adv. Rajesh Kumar', status: 'Review', date: 'Jun 06, 2024', views: 0, excerpt: 'A bounced cheque is a criminal offence under Section 138 of the Negotiable Instruments Act. This article outlines remedies...' },
];

const statusConfig = {
  Published: { color: 'bg-green-100 text-green-700', icon: <CheckCircle size={12} /> },
  Draft: { color: 'bg-gray-100 text-gray-600', icon: <Clock size={12} /> },
  Review: { color: 'bg-yellow-100 text-yellow-700', icon: <Eye size={12} /> },
  Archived: { color: 'bg-red-100 text-red-700', icon: <XCircle size={12} /> },
};

const ManageArticles = () => {
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', category: 'Civil Law', content: '' });

  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Manage Articles</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">Create and manage legal knowledge articles for users.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-sm px-lg py-sm rounded-xl bg-primary text-on-primary text-body-md hover:opacity-90 transition-opacity"
        >
          <PlusCircle size={18} /> New Article
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Articles', value: articles.length },
          { label: 'Published', value: articles.filter(a => a.status === 'Published').length },
          { label: 'Drafts', value: articles.filter(a => a.status === 'Draft').length },
          { label: 'In Review', value: articles.filter(a => a.status === 'Review').length },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className="text-display text-primary mt-xs">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card mb-lg">
        <div className="relative">
          <Search size={16} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text" placeholder="Search articles by title or category..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {filtered.map(article => (
          <div key={article.id} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-md">
              <div className="flex items-center gap-sm flex-wrap">
                <span className="text-label-sm bg-primary/10 text-primary px-sm py-xs rounded">{article.category}</span>
                <span className={`text-label-sm px-sm py-xs rounded-full font-semibold flex items-center gap-xs ${statusConfig[article.status]?.color}`}>
                  {statusConfig[article.status]?.icon} {article.status}
                </span>
              </div>
              <div className="flex items-center gap-xs">
                <button className="p-xs rounded-lg text-primary hover:bg-surface-container transition-colors"><Edit2 size={16} /></button>
                <button className="p-xs rounded-lg text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>
            <h3 className="text-headline-sm text-on-surface mb-sm line-clamp-2">{article.title}</h3>
            <p className="text-body-sm text-on-surface-variant mb-lg line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center justify-between text-body-sm text-on-surface-variant border-t border-surface-container-high pt-md">
              <span>✍️ {article.author}</span>
              <span>📅 {article.date}</span>
              {article.status === 'Published' && <span>👁️ {article.views.toLocaleString()} views</span>}
            </div>
          </div>
        ))}
      </div>

      {/* New Article Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-lg" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-headline-md text-on-surface mb-xl">Create New Article</h2>
            <div className="space-y-md">
              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Article Title *</label>
                <input
                  type="text" placeholder="Enter article title..."
                  value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Category *</label>
                <select
                  value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                  className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary"
                >
                  {['Civil Law', 'Criminal Law', 'Family Law', 'Labour Law', 'Consumer Law', 'Property Law', 'Corporate Law'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant mb-xs block">Content *</label>
                <textarea
                  rows={6} placeholder="Write the article content here..."
                  value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}
                  className="w-full border border-outline-variant rounded-lg p-md text-body-md focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>
            <div className="flex gap-md justify-end mt-xl">
              <button onClick={() => setShowForm(false)} className="px-lg py-sm rounded-lg border border-outline-variant text-body-md hover:bg-surface-container transition-colors">Cancel</button>
              <button className="px-lg py-sm rounded-lg border border-primary text-primary text-body-md hover:bg-surface-container transition-colors">Save Draft</button>
              <button className="px-lg py-sm rounded-lg bg-primary text-on-primary text-body-md hover:opacity-90 transition-opacity">Publish</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageArticles;
