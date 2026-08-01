# LawLink

**LawLink** is a comprehensive legal consultation platform designed to connect clients seeking legal advice with qualified lawyers. The system features dedicated portals for Users, Lawyers, and Administrators, streamlining the process of submitting complaints, reviewing cases, and managing legal packages.

## 🌟 Features

### 👤 For Users (Clients)
*   **Submit Complaints & Cases:** Easily submit detailed legal cases or complaints with supporting documents.
*   **Search Lawyers:** Browse and filter through a directory of qualified lawyers.
*   **Book Packages:** View and purchase legal consultation packages that suit your needs.
*   **Real-time Notifications:** Get updates on case status and lawyer responses.
*   **Messaging:** Direct consultation and messaging with assigned lawyers.

### ⚖️ For Lawyers
*   **Case Management:** View, accept, or reject assigned cases and complaints.
*   **Client Communication:** Message clients directly to request more information or provide counsel.
*   **Profile Management:** Build and manage a professional profile with specialties and experience.
*   **Dashboard Analytics:** Track active cases, pending reviews, and upcoming deadlines.

### 🛡️ For Administrators
*   **User Management:** Manage and verify user and lawyer accounts.
*   **Content Moderation:** Oversee platform activity, manage packages, and handle reports.
*   **System Analytics:** Access high-level overviews of platform usage and case resolutions.

---

## 🛠️ Tech Stack

### Frontend
*   **Framework:** React 19 with Vite
*   **Routing:** React Router v7
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **HTTP Client:** Axios

### Backend
*   **Runtime:** Node.js with TypeScript
*   **Framework:** Express.js
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **Authentication:** JWT (JSON Web Tokens)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/)
*   [PostgreSQL](https://www.postgresql.org/) database

### 1. Clone the Repository
```bash
git clone https://github.com/Nisal-Sasanka/lawlink.git
cd lawlink
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and configure the environment:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory based on the following template:
```env
# Database configuration
DATABASE_URL="postgresql://user:password@localhost:5432/lawlink?schema=public"

# Authentication secrets
JWT_SECRET="your_jwt_secret_key"
JWT_REFRESH_SECRET="your_jwt_refresh_secret_key"
```

Run database migrations (if using Prisma) and start the backend development server:
```bash
# Push schema to database
npx prisma db push

# Start the server
npm run dev
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend application should now be accessible at `http://localhost:5173`.

---

## 📝 License
This project is licensed under the MIT License.
