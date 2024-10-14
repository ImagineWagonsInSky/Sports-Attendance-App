import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ isChecked, onChange }) => {
  return (
    <label className="checkbox">
      <span className="label">Attending?</span>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={onChange} 
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default CustomCheckbox;
