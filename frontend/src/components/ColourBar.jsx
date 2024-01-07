// ColourBar.js
import React from "react";

function ColourBar({ colors, onSelectColor }) {
  return (
    
    <div className="color-bar">
      <div className="color-box">
    
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        />
      ))}
      </div>
     
    </div>
  );
}

export default ColourBar;
