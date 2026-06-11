import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Components
import ProtectedRoute from './components/ProtectedRoute';

// Common Pages
import Home from './pages/common/Home';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import ForgotPassword from './pages/common/ForgotPassword';
import NotFound from './pages/common/NotFound';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageLawyers from './pages/admin/ManageLawyers';
import ManageComplaints from './pages/admin/ManageComplaints';
import ManageArticles from './pages/admin/ManageArticles';
import Report from './pages/admin/Report';

// User Pages
import UserDashboard from './pages/user/UserDashboard';
import SubmitComplaint from './pages/user/SubmitComplaint';
import MyComplaints from './pages/user/MyComplaints';
import ComplaintDetails from './pages/user/ComplaintDetails';
import SearchLawyers from './pages/user/SearchLawyers';
import SelectPackage from './pages/user/SelectPackage';
import Payment from './pages/user/Payment';
import UploadDocuments from './pages/user/UploadDocuments';
import Review from './pages/user/Review';
import Notification from './pages/user/Notification';
import UserProfile from './pages/user/UserProfile';
import ConsultationResponse from './pages/user/ConsultationResponse';

// Lawyer Pages
import LawyerDashboard from './pages/lawyer/LawyerDashboard';
import AssignedComplaints from './pages/lawyer/AssignedComplaints';
import ComplaintReview from './pages/lawyer/ComplaintReview';
import PackageManagement from './pages/lawyer/PackageManagement';
import LawyerNotifications from './pages/lawyer/LawyerNotifications';
import LawyerProfileManage from './pages/lawyer/LawyerProfileManage';

function App() {
  // Demo: read role from localStorage (set on login)
  const role = localStorage.getItem('lawlink_role') || null;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute role={role} allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/lawyers" element={<ManageLawyers />} />
          <Route path="/admin/complaints" element={<ManageComplaints />} />
          <Route path="/admin/articles" element={<ManageArticles />} />
          <Route path="/admin/report" element={<Report />} />
        </Route>

        {/* User Routes */}
        <Route element={<ProtectedRoute role={role} allowedRoles={['user']} />}>
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/complaints/new" element={<SubmitComplaint />} />
          <Route path="/user/complaints" element={<MyComplaints />} />
          <Route path="/user/complaints/:id" element={<ComplaintDetails />} />
          <Route path="/user/lawyers/search" element={<SearchLawyers />} />
          <Route path="/user/packages" element={<SelectPackage />} />
          <Route path="/user/payment" element={<Payment />} />
          <Route path="/user/upload" element={<UploadDocuments />} />
          <Route path="/user/review" element={<Review />} />
          <Route path="/user/notifications" element={<Notification />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/consultation" element={<ConsultationResponse />} />
        </Route>

        {/* Lawyer Routes */}
        <Route element={<ProtectedRoute role={role} allowedRoles={['lawyer']} />}>
          <Route path="/lawyer" element={<LawyerDashboard />} />
          <Route path="/lawyer/assigned-complaints" element={<AssignedComplaints />} />
          <Route path="/lawyer/complaint/:id" element={<ComplaintReview />} />
          <Route path="/lawyer/packages" element={<PackageManagement />} />
          <Route path="/lawyer/notifications" element={<LawyerNotifications />} />
          <Route path="/lawyer/profile" element={<LawyerProfileManage />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
