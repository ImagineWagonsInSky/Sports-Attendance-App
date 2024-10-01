import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sessions/')
      .then(res => {
        setSessions(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleAttendanceSubmit = () => {
    axios.post('http://localhost:8000/api/attendance/', {
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
        <input type="checkbox" onChange={() => setIsAttending(!isAttending)} />
        Attending?
      </label>
      <button onClick={handleAttendanceSubmit}>Submit</button>
    </div>
  );
}

export default App;
