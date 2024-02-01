import React, { useState } from 'react';

const Education = () => {
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
      marginLeft:"50px",
      marginTop:"50px"
  }}> <h1>Education</h1>
      <div style={{
      marginTop:"50px"
  }} >
        <input
        style={{
            marginLeft:"50px",
            width:"250px"
        }}
          type="text"
          placeholder="Degree Level"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
        style={{
          marginLeft:"50px",
          width:"250px"
        }}
          type="text"
          placeholder="Field of Study"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={handleAddExperience} style={{marginLeft:"50px",backgroundColor:"#aa4d84", color:"white", width:"80px", borderRadius:"10px"}}>Add</button>
      </div>
      <div>
      {experiences.map((experience, index) => (
          <div key={index}>
            <p style={{marginLeft:"20px", marginTop:"20px"}}>
              <span style={{ fontWeight: "bold", marginLeft:"30px" }}>Degree Level:</span> {experience.company},
              <span style={{ fontWeight: "bold", marginLeft:"30px"  }}> Field of Study:</span> {experience.position}
              <button onClick={() => handleDeleteExperience(index)} style={{marginLeft:"50px",backgroundColor:"#aa4d84", color:"white", width:"80px", borderRadius:"10px"}}>Delete</button>
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
