// Name.js
import React, { useState } from "react";
import Contact from "./Contact";
import Image from "./image";

function Name({ selectedColor }) {
  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name submitted:", fullName);
    console.log("Profession submitted:", profession);
  };

  return (
    <div className="name-container" style={{ backgroundColor: selectedColor }}>
      <div className="image-box">
        <Image />
      </div>

      <div className="name-box">
        <form onSubmit={handleSubmit}>
          <input 
            style={{ backgroundColor: selectedColor }}
            className="name-input1"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <br />
          <input
            style={{ backgroundColor: selectedColor }}
            className="name-input2"
            placeholder="Profession"
            type="text"
            name="profession"
            value={profession}
            onChange={handleProfessionChange}
          />
          <br />
        </form>
      </div>

      <div className="contact-box">
        <Contact selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default Name;
