import React from "react";
import { Link } from "react-router-dom";
import './SessionCard.css';

const SessionCard = ({ session }) => {
    const { id, description, date, attendees, totalResponses} = session;
    return (
        <Link to={`/session/${id}`} className="session-card-link">
            <div className="sessioncard">
                <h2>{description}</h2>
                <p>Date: {new Date(date).toLocaleString()}</p>
                <p>Attendance: {attendees} / {totalResponses}</p>
            </div>
        </Link>
    );
};

export default SessionCard;