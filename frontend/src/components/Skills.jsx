import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSkillsChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill(""); 
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="skills-box" >
      <h2 style={{fontSize:"1.2rem", textAlign:"left"}}>Skills:</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            placeholder="Skills"
            type="text"
            name="Skill"
            value={newSkill}
            onChange={handleSkillsChange}
          />
          <button type="button" onClick={handleAddSkill}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
