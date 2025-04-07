import React from 'react';

const BenchPlayer = ({ player }) => {
  return (
    <div className="bench-player">
      <div className="player-avatar">
        <div className={`status-indicator ${player.availability}`}></div>
      </div>
      <div className="player-info">
        <div className="bench-player-name">{player.name}</div>
        <div className={`bench-player-status ${player.status === 'injured' ? 'injured' : ''}`}>
          {player.availability.charAt(0).toUpperCase() + player.availability.slice(1)}
        </div>
      </div>
      <div className="bench-player-time">{player.time}</div>
    </div>
  );
};

export default BenchPlayer;