import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SessionCard from '../components/SessionCard';
import AddSessionButton from '../components/AddSessionButton';
import './Dashboard.css';

function Dashboard() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/sessionswithattendance/');
            setSessions(response.data);
          } catch (error) {
            console.error('Error fetching sessions:', error);
          }
        };
    
        fetchSessions();
      }, []);
      return (
        <div className="dashboard">
          <div className="header">
            <h2>Upcoming Sessions</h2>
            <div className='add-session-button'>
              <AddSessionButton></AddSessionButton>
            </div>
          </div>
          <div className="session-list">
            {sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      );
    };

export default Dashboard;