import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Scale, User, Bell, LogOut, ChevronDown, Settings } from 'lucide-react';

const userNames = { user: 'John Doe', lawyer: 'Adv. Priya Nair', admin: 'Admin' };
const userAvatars = { user: 'JD', lawyer: 'PN', admin: 'AD' };
const notifRoutes = { user: '/user/notifications', lawyer: '/lawyer/notifications', admin: '/admin' };

const Navbar = ({ role, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('lawlink_role');
    if (onLogout) onLogout();
    navigate('/login');
  };

  const notifications = [
    { text: 'Lawyer assigned to CMP-001', time: '2 hrs ago', unread: true },
    { text: 'New message from Adv. Priya Nair', time: '5 hrs ago', unread: true },
    { text: 'Payment confirmed ₹1,999', time: '1 day ago', unread: false },
  ];
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav className="flex justify-between items-center px-xl py-sm bg-white border-b border-surface-container-high h-[64px] sticky top-0 z-40 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-sm text-primary no-underline group">
        <Scale size={24} className="group-hover:rotate-12 transition-transform duration-200" />
        <span className="text-headline-sm font-bold">LawLink</span>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-md">
        {/* Role Badge */}
        <span className={`hidden sm:flex text-label-sm px-md py-xs rounded-full font-semibold capitalize
          ${role === 'admin' ? 'bg-red-100 text-red-700' : role === 'lawyer' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
          {role}
        </span>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotif(!showNotif); setShowMenu(false); }}
            className="relative p-2 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-on-primary text-label-sm rounded-full flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotif && (
            <div className="absolute right-0 top-full mt-sm w-80 bg-white border border-surface-container-high rounded-2xl shadow-xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-lg py-md border-b border-surface-container-high">
                <span className="text-label-md font-semibold text-on-surface">Notifications</span>
                <span className="text-label-sm text-primary">{unreadCount} new</span>
              </div>
              <div className="divide-y divide-surface-container-high">
                {notifications.map((n, i) => (
                  <div key={i} className={`px-lg py-md flex items-start gap-sm cursor-pointer hover:bg-surface-container-low transition-colors ${n.unread ? 'bg-primary/[0.02]' : ''}`}>
                    {n.unread && <div className="w-2 h-2 rounded-full bg-primary mt-xs shrink-0" />}
                    {!n.unread && <div className="w-2 shrink-0" />}
                    <div>
                      <p className={`text-body-sm ${n.unread ? 'font-semibold text-on-surface' : 'text-on-surface-variant'}`}>{n.text}</p>
                      <p className="text-body-sm text-on-surface-variant mt-xs">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-lg py-md border-t border-surface-container-high">
                <button
                  onClick={() => { setShowNotif(false); navigate(notifRoutes[role] || '/'); }}
                  className="text-body-sm text-primary font-medium hover:underline w-full text-center"
                >
                  View all notifications →
                </button>
              </div>
            </div>
          )}
        </div>
