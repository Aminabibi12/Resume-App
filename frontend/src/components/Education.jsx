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
      borderBottom:"2px solid black",
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    
     
    }}>
      <h1 style={{fontSize:"1.4rem"}}>Education:</h1>

      <div style={{
        marginTop: "20px",
        display: "flex",
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

      <div  style={{ width: "535px", marginTop:"10px"}} >
        {educations.map((education, index) => (
          <div key={index}>
            <p style={{ marginLeft: "5px", marginTop: "10px", width: "500px"}}>
              <span style={{ fontWeight: "bold", marginLeft: "5px",marginTop: "10px", width: "500px" }}>Degree Level:</span> {education.level},
              <br />
              <span style={{ fontWeight: "bold", marginLeft: "5px",marginTop: "10px",width: "500px" }}>Field of Study:</span> {education.field}
              <button onClick={() => handleDeleteEducation(index)} style={{ marginLeft: "10px", backgroundColor: "#aa4d84", color: "white", width: "80px", borderRadius: "10px" }}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
