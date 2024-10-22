import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SessionCard from '../components/SessionCard';

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
        <div>
      <h1>Upcoming Sessions</h1>
      <div className="session-list">
        {sessions.map((session) => (
          <SessionCard 
            key={session.id} 
            session={session}  // Pass the session data as props to SessionCard
          />
        ))}
      </div>
    </div>
    );
};

export default Dashboard;