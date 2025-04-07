import React from 'react';
import PlayerItem from './PlayerItem';
import './PlayerList.css';

const PlayerList = ({ players }) => {
  // Filter players for the list section
  const listPlayers = players.filter(player => !player.time);
  
  return (
    <section className="player-list-section">
      <h2 className="section-title">Player List</h2>
      <div className="player-list">
        {listPlayers.map(player => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </div>
    </section>
  );
};

export default PlayerList;