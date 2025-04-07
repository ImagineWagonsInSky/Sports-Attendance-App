import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <div className="logo-img">🏉</div>
        RugbyCoach Pro
      </a>
      
      <nav className="nav">
        <a href="/" className="nav-link active">Home</a>
        <a href="/matches" className="nav-link">Matches</a>
        <a href="/teams" className="nav-link">Teams</a>
      </nav>
      
      <div className="header-right">
        <button className="help-btn">
          <span>?</span> Help
        </button>
        <button className="settings-btn">⚙️</button>
      </div>
    </header>
  );
};

export default Header;