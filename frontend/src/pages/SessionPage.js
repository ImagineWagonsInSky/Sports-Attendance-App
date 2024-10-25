import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SessionPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/sessions/${sessionId}/`);
        setSession(response.data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (!session) return <p>Loading session details...</p>;

  return (
    <div>
      <h1>{session.description}</h1>
      <p>Date: {new Date(session.date).toLocaleString()}</p>
      <p>Attendance: {session.attendees} / {session.totalResponses}</p>
      {/**/}
    </div>
  );
};

export default SessionPage;
