import React from "react";
import './SessionCard.css';

const SessionCard = ({ session }) => {
    const { description, date, attendees, totalResponses} = session;
    return (
        <div className="sessioncard">
            <h2>{description}</h2>
            <p>Date: {new Date(date).toLocaleString()}</p>
            <p>Attendance: {attendees} / {totalResponses}</p>
        </div>
    );
};

export default SessionCard;