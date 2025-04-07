import React from 'react';

const PlayerItem = ({ player }) => {
  return (
    <div className="player-item">
      <div className="player-name">{player.name}</div>
      <div className="player-position">{player.position}</div>
      <div className={`player-status ${player.status}`}>
        {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
      </div>
    </div>
  );
};

export default PlayerItem;
