import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-info">
        <div className="user-avatar"></div>
        <div>
          <div className="user-name">Amanda</div>
          <div className="view-profile">View profile</div>
        </div>
      </div>
      <div className="profile-actions">
        <button className="profile-action-btn">⚙️</button>
        <button className="profile-action-btn">👥</button>
      </div>
    </div>
  );
};

export default UserProfile;