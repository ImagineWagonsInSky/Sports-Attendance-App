import React from "react";
import { Link } from "react-router-dom";
import './SessionCard.css';

const SessionCard = ({ session }) => {
    const { id, description, date, attendees, totalResponses} = session;
    return (
            <div className="sessioncard">
                <Link to={`/session/${id}`} className="session-card-link">
                    <h2 className="sessioncard__title">{description}</h2>
                </Link>
                <p className="sessioncard__date">Date: {new Date(date).toLocaleString()}</p>
                <p className="sessioncard__date">Attendance: {attendees} / {totalResponses}</p>
            </div>
        
    );
};

export default SessionCard;