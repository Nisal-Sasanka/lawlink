-- USERS TABLE
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LAWYERS TABLE
CREATE TABLE lawyers (
    lawyer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    specialization VARCHAR(100),
    experience_years INT,
    license_number VARCHAR(100),
    profile_description TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ADMINS TABLE
CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- COMPLAINTS TABLE
CREATE TABLE complaints (
    complaint_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    lawyer_id INT REFERENCES lawyers(lawyer_id),
    title VARCHAR(255),
    description TEXT,
    category VARCHAR(100),
    priority VARCHAR(50),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- COMPLAINT DOCUMENTS TABLE
CREATE TABLE complaint_documents (
    document_id SERIAL PRIMARY KEY,
    complaint_id INT REFERENCES complaints(complaint_id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_type VARCHAR(50),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CONSULTATION PACKAGES TABLE
CREATE TABLE consultation_packages (
    package_id SERIAL PRIMARY KEY,
    lawyer_id INT REFERENCES lawyers(lawyer_id) ON DELETE CASCADE,
    package_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    duration VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CONSULTATIONS TABLE
CREATE TABLE consultations (
    consultation_id SERIAL PRIMARY KEY,
    complaint_id INT REFERENCES complaints(complaint_id) ON DELETE CASCADE,
    lawyer_id INT REFERENCES lawyers(lawyer_id) ON DELETE CASCADE,
    package_id INT REFERENCES consultation_packages(package_id) ON DELETE SET NULL,
    consultation_type VARCHAR(20),
    message TEXT,
    consultation_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PAYMENTS TABLE
CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    consultation_id INT REFERENCES consultations(consultation_id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100),
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- NOTIFICATIONS TABLE
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    type VARCHAR(50),
    status VARCHAR(20) DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- REVIEWS TABLE
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    lawyer_id INT REFERENCES lawyers(lawyer_id) ON DELETE CASCADE,
    consultation_id INT REFERENCES consultations(consultation_id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);