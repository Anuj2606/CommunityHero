# 🏙️ FixMyCity

> **An AI-Powered Civic Issue Reporting & Municipal Management Platform**

FixMyCity is a modern civic engagement platform that enables citizens to report public infrastructure issues while helping municipal authorities efficiently manage, prioritize, and resolve them using artificial intelligence and real-time collaboration.

Built with **React, TypeScript, Firebase, Google Gemini AI, and Google Maps APIs**, the platform streamlines the complete lifecycle of civic complaint management—from issue reporting to resolution.

---

## 📌 Problem Statement

Urban residents frequently encounter issues such as:

- 🛣️ Potholes
- 💧 Water leakages
- 💡 Broken streetlights
- 🗑️ Garbage accumulation
- 🌊 Drainage blockages
- 🌳 Public infrastructure damage

Traditional complaint systems are often slow, lack transparency, and provide little visibility into the resolution process.

**FixMyCity** bridges the communication gap between citizens and municipal authorities through an intelligent, transparent, and collaborative digital platform.

---

# ✨ Features

## 👥 Citizen Portal

- 🔐 Secure Google Sign-In
- 📝 AI-assisted issue reporting
- 📷 Image upload support
- 📍 GPS & manual location selection
- 🤖 AI-generated issue summaries
- 🏷️ Automatic issue categorization
- ⚠️ Severity prediction
- 📌 Duplicate issue detection
- 🤝 Community confirmation
- 🗺️ Interactive issue map
- 🔔 Real-time notifications
- 📊 Personal complaint history
- 📍 Live issue tracking

---

## 🏛️ Administrator Portal

- 📋 Issue Management Dashboard
- 🏢 Department assignment
- 👨‍🔧 Officer assignment
- 📈 Reports & Insights Dashboard
- 🔍 Global Search & Operations Center
- 📊 Analytics & Performance Monitoring
- ⏱️ Expected Resolution Time Monitoring
- 📤 Resolution evidence upload
- 📢 Citizen notification management

---

## 🤖 AI Capabilities

Powered by **Google Gemini**

- AI issue summarization
- Automatic category detection
- Severity estimation
- Department recommendation
- Duplicate complaint detection
- Report quality analysis
- Community insights generation

---

# 🏗️ System Workflow

```text
Citizen Login
      │
      ▼
Report Civic Issue
      │
      ▼
Upload Image
      │
      ▼
GPS / Manual Location
      │
      ▼
Gemini AI Analysis
      │
      ▼
Issue Summary
      │
      ▼
Duplicate Detection
      │
      ▼
Submit Report
      │
      ▼
Cloud Firestore
      │
      ▼
Administrator Dashboard
      │
      ▼
Department Assignment
      │
      ▼
Status Updates
      │
      ▼
Resolution
      │
      ▼
Citizen Notification
```

---

# 🏛️ Architecture

```text
                 Citizens
                     │
                     ▼
        React + TypeScript Frontend
                     │
     ┌───────────────┼────────────────┐
     ▼               ▼                ▼
Firebase Auth   Google Gemini     Google Maps
                     │
                     ▼
             Cloud Firestore
                     │
                     ▼
        Administrator Dashboard
                     │
                     ▼
             Issue Resolution
```

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, TypeScript, Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Animations | Motion |
| Charts | Recharts |
| Maps | Leaflet, OpenStreetMap |
| Backend | Node.js, Express.js |
| Database | Cloud Firestore |
| Authentication | Firebase Authentication |
| AI | Google Gemini API |
| Development | Google AI Studio |
| Hosting | Firebase Hosting |
| Cloud | Firebase Cloud Functions |

---

# ☁️ Google Technologies Used

- ✅ Google AI Studio
- ✅ Gemini API
- ✅ Firebase Authentication
- ✅ Cloud Firestore
- ✅ Firebase Hosting
- ✅ Firebase Cloud Functions
- ✅ Google Places API
- ✅ Google Geocoding API
- ✅ Browser Geolocation API

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/FixMyCity.git
```

Navigate into the project

```bash
cd FixMyCity
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
GEMINI_API_KEY=YOUR_API_KEY
GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

Start the development server

```bash
npm run dev
```

---

# 🔥 Firebase Setup

Configure:

- Firebase Authentication
- Cloud Firestore
- Firebase Hosting
- Cloud Functions

Update your Firebase configuration inside the project before running.

---

# 📷 Screenshots

> Add screenshots of:

- Landing Page
- Citizen Dashboard
- Report Issue
- Community Map
- Administrator Dashboard
- Issue Management
- Reports & Insights

---

# 🌍 Impact

FixMyCity transforms traditional civic complaint management into an intelligent digital ecosystem.

The platform:

- Improves transparency
- Reduces duplicate complaints
- Accelerates issue resolution
- Enhances community participation
- Enables smarter municipal decision-making
- Strengthens communication between citizens and local authorities

---

# 🔮 Future Enhancements

- 📱 Android & iOS application
- 📧 Email notifications
- 🌐 Multi-language support
- 📍 Live officer tracking
- 📸 AI-based image damage assessment
- 📊 Predictive maintenance analytics
- 🔔 Push notifications

---

# 👨‍💻 Team

Developed as part of the **Vibe2Ship Hackathon**.

---

# 📄 License

This project is developed for educational and hackathon purposes.

---

# ⭐ If you found this project interesting, consider giving it a star!
