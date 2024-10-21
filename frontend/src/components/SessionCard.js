import React from "react";
import './SessionCard.css';

const SessionCard = ({ session }) => {
    const { title, date, attendees, totalResponses} = session;
    return (
        <div class="sessioncard">
            <h2>{title}</h2>
            <p>Date: {new Date(date).toLocaleString()}</p>
            <p>Attendance: {attendees} / {totalResponses}</p>
        </div>
    );
};

export default SessionCard;