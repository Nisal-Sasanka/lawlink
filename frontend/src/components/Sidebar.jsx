import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Scale, FileText, Briefcase, FileQuestion,
  Bell, Settings, PlusCircle, ChevronRight, BarChart3, Package, MessageSquare, User
} from 'lucide-react';

const adminLinks = [
  { to: '/admin', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { to: '/admin/users', icon: <Users size={18} />, label: 'Users', badge: '1,248' },
  { to: '/admin/lawyers', icon: <Scale size={18} />, label: 'Lawyers', badge: '6 pending', badgeColor: 'bg-yellow-100 text-yellow-700' },
  { to: '/admin/complaints', icon: <Briefcase size={18} />, label: 'Complaints', badge: '12', badgeColor: 'bg-red-100 text-red-700' },
  { to: '/admin/articles', icon: <FileText size={18} />, label: 'Articles' },
  { to: '/admin/report', icon: <BarChart3 size={18} />, label: 'Reports' },
];

const userLinks = [
  { to: '/user', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { to: '/user/complaints/new', icon: <PlusCircle size={18} />, label: 'New Complaint', highlight: true },
  { to: '/user/complaints', icon: <FileQuestion size={18} />, label: 'My Complaints' },
  { to: '/user/lawyers/search', icon: <Users size={18} />, label: 'Find a Lawyer' },
  { to: '/user/notifications', icon: <Bell size={18} />, label: 'Notifications', badge: '3', badgeColor: 'bg-primary text-on-primary' },
  { to: '/user/consultation', icon: <MessageSquare size={18} />, label: 'Consultation' },
  { to: '/user/profile', icon: <User size={18} />, label: 'My Profile' },
];

const lawyerLinks = [
  { to: '/lawyer', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { to: '/lawyer/assigned-complaints', icon: <Briefcase size={18} />, label: 'Assigned Cases', badge: '2', badgeColor: 'bg-blue-100 text-blue-700' },
  { to: '/lawyer/packages', icon: <Package size={18} />, label: 'My Packages' },
  { to: '/lawyer/notifications', icon: <Bell size={18} />, label: 'Notifications', badge: '2', badgeColor: 'bg-primary text-on-primary' },
  { to: '/lawyer/profile', icon: <User size={18} />, label: 'My Profile' },
];

const sectionTitles = {
  admin: 'Administration',
  user: 'My Account',
  lawyer: 'Lawyer Portal',
};

const Sidebar = ({ role }) => {
  let links = [];
  if (role === 'admin') links = adminLinks;
  else if (role === 'lawyer') links = lawyerLinks;
  else if (role === 'user') links = userLinks;

  const title = sectionTitles[role] || '';

  return (
    <aside className="w-[240px] shrink-0 bg-white border-r border-surface-container-high flex flex-col py-lg overflow-y-auto">
      {/* Section Title */}
      <p className="text-label-sm text-on-surface-variant px-lg mb-md uppercase tracking-widest">{title}</p>

      <nav className="flex flex-col gap-xs flex-1">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            end={link.to === '/admin' || link.to === '/user' || link.to === '/lawyer'}
            className={({ isActive }) =>
              `flex items-center justify-between px-lg py-sm text-body-md no-underline transition-all duration-150 rounded-none border-l-[3px] group ` +
              (isActive
                ? 'bg-primary/5 text-primary border-primary font-semibold'
                : 'text-on-surface-variant border-transparent hover:bg-surface-container-low hover:text-on-surface')
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-md">
                  <span className={`transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {link.icon}
                  </span>
                  <span className={link.highlight && !isActive ? 'text-primary font-semibold' : ''}>{link.label}</span>
                </div>
                <div className="flex items-center gap-xs">
                  {link.badge && (
                    <span className={`text-label-sm px-xs py-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold text-xs ${link.badgeColor || 'bg-surface-container-high text-on-surface-variant'}`}>
                      {link.badge}
                    </span>
                  )}
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Status */}
      <div className="mt-auto px-lg pt-lg border-t border-surface-container-high">
        <div className={`flex items-center gap-sm p-md rounded-xl ${role === 'admin' ? 'bg-red-50' : role === 'lawyer' ? 'bg-blue-50' : 'bg-green-50'}`}>
          <div className={`w-2 h-2 rounded-full ${role === 'admin' ? 'bg-red-500' : role === 'lawyer' ? 'bg-blue-500' : 'bg-green-500'}`} />
          <div>
            <p className="text-label-sm font-semibold text-on-surface capitalize">{role}</p>
            <p className="text-body-sm text-on-surface-variant">Active session</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
