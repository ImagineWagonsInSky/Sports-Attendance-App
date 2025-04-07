import React from 'react';
import PlayerSlot from './PlayerSlot';
import './PlayerSelection.css';

const slots = [
  { id: 1, title: 'Player One', position: 'Forward' },
  { id: 2, title: 'Player Two', position: 'Midfielder' },
  { id: 3, title: 'Player Three', position: 'Defender' },
  { id: 4, title: 'Player Four', position: 'Goalkeeper' },
  { id: 5, title: 'Player Five', position: 'Forward' }
];

const PlayerSelection = () => {
  return (
    <section className="player-selection-section">
      <h2 className="section-title">Starting Player Selection</h2>
      
      {slots.map(slot => (
        <PlayerSlot 
          key={slot.id}
          title={slot.title} 
          position={slot.position} 
        />
      ))}
    </section>
  );
};

export default PlayerSelection;