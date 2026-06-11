{ useState } from 'react';
import { Search, Eye, UserX, UserCheck, Filter, Phone, Mail, Calendar } from 'lucide-react';

const users = [
  { id: 'USR-1001', name: 'John Doe', email: 'john.doe@email.com', phone: '+91 98765 43210', city: 'Colombo', status: 'Active', joined: 'Jan 15, 2024', cases: 3, avatar: 'JD' },
  { id: 'USR-1002', name: 'Anita Rao', email: 'anita.rao@email.com', phone: '+91 99001 22334', city: 'Jaffna', status: 'Active', joined: 'Feb 08, 2024', cases: 1, avatar: 'AR' },
  { id: 'USR-1003', name: 'Ramesh Gupta', email: 'ramesh.g@email.com', phone: '+91 90000 55678', city: 'Batticaloa', status: 'Inactive', joined: 'Mar 22, 2024', cases: 2, avatar: 'RG' },
  { id: 'USR-1004', name: 'Sunita Patel', email: 'sunita.p@email.com', phone: '+91 98001 77889', city: 'Ampara', status: 'Active', joined: 'Apr 11, 2024', cases: 1, avatar: 'SP' },
  { id: 'USR-1005', name: 'Arun Krishnan', email: 'arun.k@email.com', phone: '+91 97123 45678', city: 'Kalmunai', status: 'Suspended', joined: 'May 05, 2024', cases: 0, avatar: 'AK' },
  { id: 'USR-1006', name: 'Lakshmi Iyer', email: 'lakshmi.i@email.com', phone: '+91 98112 67890', city: 'Kollupitiya', status: 'Active', joined: 'May 20, 2024', cases: 1, avatar: 'LI' },
  { id: 'USR-1007', name: 'Vikram Singh', email: 'vikram.s@email.com', phone: '+91 96001 34500', city: 'Dehiwala', status: 'Active', joined: 'Jun 01, 2024', cases: 0, avatar: 'VS' },
  { id: 'USR-1008', name: 'Pooja Menon', email: 'pooja.m@email.com', phone: '+91 95001 23456', city: 'Galle', status: 'Active', joined: 'Jun 03, 2024', cases: 0, avatar: 'PM' },
];

const statusConfig = {
  Active: 'bg-green-100 text-green-700',
  Inactive: 'bg-gray-100 text-gray-600',
  Suspended: 'bg-red-100 text-red-700',
};

const ManageUsers = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = users.filter(u =>
    (filter === 'All' || u.status === filter) &&
    (u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Manage Users</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">View and manage all registered users on LawLink.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {[
          { label: 'Total Users', value: users.length, color: 'text-primary' },
          { label: 'Active', value: users.filter(u => u.status === 'Active').length, color: 'text-green-600' },
          { label: 'Inactive', value: users.filter(u => u.status === 'Inactive').length, color: 'text-gray-600' },
          { label: 'Suspended', value: users.filter(u => u.status === 'Suspended').length, color: 'text-red-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card">
            <p className="text-label-md text-on-surface-variant">{s.label}</p>
            <p className={`text-display ${s.color} mt-xs`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-surface-container-high rounded-xl p-lg shadow-card mb-lg">
        <div className="flex flex-col sm:flex-row gap-md items-start sm:items-center justify-between">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text" placeholder="Search by name, email or ID..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-sm flex-wrap">
            <Filter size={16} className="text-on-surface-variant" />
            {['All', 'Active', 'Inactive', 'Suspended'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-md py-xs rounded-lg text-label-sm transition-colors ${filter === f ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
