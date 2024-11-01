# Rugby-Attendance-App

Welcome to the **Rugby-Attendance-App**! This app helps rugby teams, or any sports teams, register attendance and keep track of player availability for upcoming sessions and games. Developed for efficient team management, this app is in its early stages and currently focuses on basic attendance features, so stay tuned for more updates.

## 🌟 Features

- **Attendance Tracking**: Easily mark attendance for players.
- **Session Management**: View upcoming sessions (e.g., training, games) with a summary of attendees.
- **Individual Session Pages**: See details for each session at a glance.

> **Note**: This project is in its initial development phase, and while core features are functional, more enhancements are on the way!

## 🚀 Getting Started

### Prerequisites
To run this project, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started) (for easy containerization)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (optional for direct frontend/backend setup)

### Installation & Setup

#### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/team-attendance-manager.git
cd team-attendance-manager
```
#### 2. Build and Run with Docker:
```bash
docker-compose up --build
```
This will start both the backend (Django) and frontend (React) services in containers.
The app will be available on http://localhost:3000 for the frontend and http://localhost:8000 for the backend API.

## 🛠 Technologies
- Frontend: React, HTML, CSS
- Backend: Django (Django REST Framework)
- Database: PostgreSQL
- Containerization: Docker

## ⚠️ License

This project is open-source under the MIT License.
