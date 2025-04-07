import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SessionPage.css"; // Import CSS file

const SessionPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/sessions/${sessionId}/`
        );
        setSession(response.data);
      } catch (err) {
        console.error("Error fetching session:", err);
        setError("Failed to fetch session. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading) {
    return <div className="loading">Loading session details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!session) {
    return <div className="not-found">Session not found.</div>;
  }

  return (
    <div className="session-page">
      <div className="session-header">
        <h1>{session.description}</h1>
        <p className="session-date">
          Date: {new Date(session.date).toLocaleString()}
        </p>
      </div>
      <div className="session-details">
        <p>
          <strong>Attendance:</strong> {session.attendees} / {session.totalResponses}
        </p>
        {session.location && <p><strong>Location:</strong> {session.location}</p>}
        {session.notes && <p><strong>Notes:</strong> {session.notes}</p>}
        {session.sessionType && <p><strong>Type:</strong> {session.sessionType}</p>}
        {/* Add more session details as needed, for example, a list of players, match results etc. */}
      </div>

      {session.sessionType === "match" && session.opponent && (
        <div className="match-details">
          <h2>Match Details</h2>
          <p><strong>Opponent:</strong> {session.opponent}</p>
          {session.scoreOurTeam !== undefined && session.scoreOpponent !== undefined && (
            <p><strong>Score:</strong> {session.scoreOurTeam} - {session.scoreOpponent}</p>
          )}

          {/* Add more match specific details here */}
        </div>
      )}

      {/* Add a list of attendees if you have that data */}

    </div>
  );
};

export default SessionPage;
