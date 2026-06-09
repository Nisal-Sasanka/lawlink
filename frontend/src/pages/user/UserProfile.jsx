import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X, Shield, Clock, Briefcase } from 'lucide-react';

const UserProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    city: 'Chennai',
    state: 'Tamil Nadu',
    dob: '1990-05-14',
    gender: 'Male',
    address: '42, Gandhi Street, T. Nagar, Chennai - 600017',
    bio: 'A law-abiding citizen seeking justice through the right channels.',
  });
