import React from 'react';

const PlayerSlot = ({ title, position }) => {
  return (
    <div className="player-slot">
      <h3 className="player-slot-title">{title}</h3>
      <div className="player-slot-position">Position: {position}</div>
      <div className="select-as-starter">Select as Starter</div>
      <button className="select-btn">Select</button>
    </div>
  );
};

export default PlayerSlot;