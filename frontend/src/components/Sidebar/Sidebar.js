import React from 'react';
import './Sidebar.css';

const sidebarItems = [
  { icon: '📅', text: 'Match Day', active: true },
  { icon: '🕒', text: 'Time: 3:00 PM' },
  { icon: '📍', text: 'Venue: Riverside' },
  { icon: '☀️', text: 'Weather: Sunny, 75°F' },
  { icon: '👥', text: 'Team: Eagles' },
  { icon: '🔔', text: 'Notify Parents' }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {sidebarItems.map((item, index) => (
        <a 
          key={index} 
          href="#" 
          className={`sidebar-item ${item.active ? 'active' : ''}`}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-text">{item.text}</span>
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;