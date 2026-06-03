-- USERS
INSERT INTO users (name, email, password, phone, address, status)
VALUES
('Nisal Sasanka', 'nisal@gmail.com', '123456', '0712345678', 'Colombo, Sri Lanka', 'active'),
('Kamal Perera', 'kamal@gmail.com', '123456', '0771234567', 'Kandy, Sri Lanka', 'active'),
('Amali Fernando', 'amali@gmail.com', '123456', '0759876543', 'Galle, Sri Lanka', 'active');

-- LAWYERS
INSERT INTO lawyers
(name, email, phone, specialization, experience_years, license_number, profile_description, status)
VALUES
('Lawyer Silva', 'silva@gmail.com', '0711111111', 'Criminal Law', 5, 'LIC001', 'Experienced criminal lawyer.', 'approved'),
('Lawyer Perera', 'perera@gmail.com', '0722222222', 'Family Law', 8, 'LIC002', 'Specialized in family law cases.', 'approved'),
('Lawyer Jayasinghe', 'jaya@gmail.com', '0733333333', 'Property Law', 6, 'LIC003', 'Handles land and property disputes.', 'pending');

-- ADMINS
INSERT INTO admins (name, email, password)
VALUES
('System Admin', 'admin@lawlink.com', 'admin123');

-- COMPLAINTS
INSERT INTO complaints
(user_id, lawyer_id, title, description, category, priority, status)
VALUES
(1, 1, 'Theft Case Issue', 'My personal belongings were stolen and I need legal advice.', 'Criminal Law', 'High', 'pending'),
(2, 2, 'Divorce Consultation', 'I need advice regarding divorce process and child custody.', 'Family Law', 'Medium', 'received'),
(3, 3, 'Land Boundary Problem', 'There is a boundary dispute with my neighbour.', 'Property Law', 'High', 'answered');

-- COMPLAINT DOCUMENTS
INSERT INTO complaint_documents
(complaint_id, file_name, file_path, file_type)
VALUES
(1, 'police_report.pdf', '/uploads/complaint-documents/police_report.pdf', 'pdf'),
(2, 'marriage_certificate.pdf', '/uploads/complaint-documents/marriage_certificate.pdf', 'pdf'),
(3, 'land_deed.jpg', '/uploads/complaint-documents/land_deed.jpg', 'jpg');

-- CONSULTATION PACKAGES
INSERT INTO consultation_packages
(lawyer_id, package_name, description, price, duration)
VALUES
(1, 'Basic Criminal Consultation', 'Basic legal advice for criminal cases.', 1500.00, '30 minutes'),
(2, 'Family Law Consultation', 'Detailed family law consultation.', 2000.00, '45 minutes'),
(3, 'Property Law Consultation', 'Consultation for land and property issues.', 2500.00, '1 hour');

-- CONSULTATIONS
INSERT INTO consultations
(complaint_id, lawyer_id, package_id, consultation_type, message, consultation_status)
VALUES
(1, 1, 1, 'paid', 'Please provide the police report and witness details.', 'active'),
(2, 2, 2, 'free', 'You should prepare marriage documents and child details.', 'completed'),
(3, 3, 3, 'paid', 'Land deed and survey plan are required for further advice.', 'pending');

-- PAYMENTS
INSERT INTO payments
(consultation_id, amount, payment_method, transaction_id, payment_status)
VALUES
(1, 1500.00, 'Card', 'TXN001', 'success'),
(2, 0.00, 'Free', 'FREE001', 'success'),
(3, 2500.00, 'Bank Transfer', 'TXN003', 'pending');

-- NOTIFICATIONS
INSERT INTO notifications
(user_id, message, type, status)
VALUES
(1, 'Your complaint has been submitted successfully.', 'complaint', 'unread'),
(2, 'Lawyer has responded to your complaint.', 'consultation', 'read'),
(3, 'Payment is pending for your consultation.', 'payment', 'unread');

-- REVIEWS
INSERT INTO reviews
(user_id, lawyer_id, consultation_id, rating, comment)
VALUES
(1, 1, 1, 5, 'Very helpful lawyer. Good explanation.'),
(2, 2, 2, 4, 'Good consultation and friendly support.'),
(3, 3, 3, 3, 'Waiting for more details.');