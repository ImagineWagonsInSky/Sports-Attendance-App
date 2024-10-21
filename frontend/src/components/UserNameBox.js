import React from 'react';
import './UserNameBox.css';

const UserNameBox = ({value, onChange}) => {
    return (
        <div class="inputGroup">
            <input
                type="text" 
                required="" 
                autocomplete="off"
                value={value}
                onChange={onChange}
                placeholder="Your Name"
             />
           
        </div>
    );
};

export default UserNameBox;