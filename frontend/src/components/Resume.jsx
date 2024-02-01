import './App.css';
import React, {useState} from "react";
import Name from './Name';
import Main from './main';
import ColourBar from './ColourBar';

function Resume() {

    const colorOptions = ["#FFE9EE", "#D8E2DC", "#FFE5D9", "#DBCDF0", "#C6DEF1"];
  const [selectedColor, setSelectedColor] = useState("#FFE9EE");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='resume'>

        <div className="color-bar">
          <ColourBar colors={colorOptions} onSelectColor={handleColorChange} />
        </div>

     <div style={{}}>
      <Name selectedColor={selectedColor} />
      <Main />
      </div>

    </div>
  );
}

export default Resume;
