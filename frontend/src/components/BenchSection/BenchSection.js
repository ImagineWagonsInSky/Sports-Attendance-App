import React from 'react';
import BenchPlayer from './BenchPlayer';
import { playerData } from '../../data/players';
import './BenchSection.css';

const BenchSection = () => {
  // Filter players that have time property for bench section
  const benchPlayers = playerData.filter(player => player.time);
  
  return (
    <section className="bench-section">
      <h2 className="bench-title">Bench Player Selection</h2>
      
      {benchPlayers.map(player => (
        <BenchPlayer key={player.id} player={player} />
      ))}
    </section>
  );
};

export default BenchSection;