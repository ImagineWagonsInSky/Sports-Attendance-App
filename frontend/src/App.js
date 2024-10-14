import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [sessions, setSessions] = useState([]);
  const [player, setPlayer] = useState('');
  const [selectedSession, setSelectedSession] = useState(null);
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sessions/');
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, []);

  const handleAttendanceSubmit = () => {
    axios.post('http://localhost:8000/api/attendance/', {
      player: player,
      session: selectedSession,
      is_attending: isAttending
    }).then(res => {
      alert('Attendance submitted!');
    }).catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Confirm Attendance</h1>
      <select onChange={e => setSelectedSession(e.target.value)}>
        <option>Select a session</option>
        {sessions.map(session => (
          <option key={session.id} value={session.id}>
            {session.description} - {new Date(session.date).toLocaleString()}
          </option>
        ))}
      </select>
      <label>
        Your name:
        <input type="text" value={player} onChange={e => setPlayer(e.target.value)} />
      </label>

      <label>
        Attending? 
        <input type="checkbox" checked={isAttending} onChange={() => setIsAttending(!isAttending)} />
      </label>

      {/* Submit button */}
      <button onClick={handleAttendanceSubmit}>Submit</button>
    </div>
  );
}

export default App;
