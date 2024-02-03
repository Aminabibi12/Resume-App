import React, { useState } from 'react';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [level, setLevel] = useState('');
  const [field, setField] = useState('');

  const handleAddEducation = () => {
    if (level && field) {
      setEducations([...educations, { level, field }]);
      setLevel('');
      setField('');
    }
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  return (
    <div style={{
      marginLeft: "5px",
      marginTop: "10px",
      display: "flex", // Set display to flex
      flexDirection: "column", // Align children vertically
      alignItems: "flex-start" // Align children to the start of the container
    }}>
      <h1 style={{fontSize:"1.8rem"}}>Education</h1>
      <div style={{
        marginTop: "50px",
        display: "flex", // Set display to flex
      }}>
        <input
          style={{
            marginLeft: "5px",
            width: "180px"
          }}
          type="text"
          placeholder="Degree Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          style={{
            marginLeft: "5px",
            width: "180px"
          }}
          type="text"
          placeholder="Field of Study"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
        <button onClick={handleAddEducation} style={{ marginLeft: "10px", backgroundColor: "#aa4d84", color: "white", width: "80px", borderRadius: "10px" }}>Add</button>
      </div>
      <div>
        {educations.map((education, index) => (
          <div key={index}>
            <p style={{ marginLeft: "5px", marginTop: "10px" }}>
              <span style={{ fontWeight: "bold", marginLeft: "5px" }}>Degree Level:</span> {education.level},
              <span style={{ fontWeight: "bold", marginLeft: "5px" }}> Field of Study:</span> {education.field}
              <button onClick={() => handleDeleteEducation(index)} style={{ marginLeft: "10px", backgroundColor: "#aa4d84", color: "white", width: "80px", borderRadius: "10px" }}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
