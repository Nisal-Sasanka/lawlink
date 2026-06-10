import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, AlertTriangle, FileText, User, Calendar, MessageSquare, Paperclip, Download } from 'lucide-react';

const complaintsData = {
  'CMP-001': {
    id: 'CMP-001', title: 'Property Dispute with Neighbor',
    category: 'Civil Law', priority: 'High', status: 'In Review',
    date: 'Jun 01, 2024', incidentDate: 'May 25, 2024',
    location: 'Chennai, Tamil Nadu', opposingParty: 'Mr. Suresh Rajan',
    package: 'Standard Representation',
    description: 'My neighbor, Mr. Suresh Rajan, has encroached upon approximately 2 feet of my registered property land and constructed a boundary wall inside my premises. The encroachment is clearly visible and documented in the official survey and my sale deed. This has been going on for 3 months and he refuses to remove the construction despite multiple requests.',
