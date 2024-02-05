import React, { useState } from 'react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');

  const handleAddExperience = () => {
    if (company && position) {
      setExperiences([...experiences, { company, position }]);
      setCompany('');
      setPosition('');
    }
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <div style={{
      borderBottom:"2px solid black",
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginBottom:"20px",
     
    }}>
      <h1 style={{ fontSize: "1.4rem" }}>Experience:</h1>

      <div id="experience-content" style={{
        marginTop: "10px",
        display: "flex",
       
      }}>
        <input
          style={{
            marginLeft: "5px",
            width: "180px"
          }}
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          style={{
            marginLeft: "5px",
            width: "180px"
          }}
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={handleAddExperience} style={{ marginLeft: "10px", backgroundColor: "#aa4d84", color: "white", width: "80px", borderRadius: "10px" }}>Add</button>
      </div>

      <div style={{ width: "535px", marginTop:"10px"}} >
        {experiences.map((experience, index) => (
          <div style={{ marginLeft: "5px", marginTop: "10px", width: "500px"}}key={index}>
            <p style={{ marginLeft: "5px", marginTop: "10px", width: "500px"}}>
              <span  style={{ fontWeight: "bold", marginLeft: "5px",marginTop: "10px", width: "500px" }}>Company:</span> {experience.company},
              <br />
              <span  style={{ fontWeight: "bold", marginLeft: "5px",marginTop: "10px", width: "500px" }}>Position:</span> {experience.position}
              <button onClick={() => handleDeleteExperience(index)} style={{ marginLeft: "10px", backgroundColor: "#aa4d84", color: "white", width: "80px", borderRadius: "10px" }}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
