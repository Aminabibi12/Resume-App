import React, { useState } from "react";

function Experience() {
  const [jobDetails, setJobDetails] = useState([{ company: "", position: "" }]);

  const handleInputChange = (index, field, value) => {
    const updatedJobDetails = [...jobDetails];
    updatedJobDetails[index] = {
      ...updatedJobDetails[index],
      [field]: value,
    };
    setJobDetails(updatedJobDetails);
  };

  const handleAddField = () => {
    const lastJob = jobDetails[jobDetails.length - 1];
    const defaultValues = { company: "", position: "" };
    setJobDetails([...jobDetails, { company: lastJob.company || defaultValues.company, position: lastJob.position || defaultValues.position }]);
  };

  const handleRemoveField = (index) => {
    const updatedJobDetails = [...jobDetails];
    updatedJobDetails.splice(index, 1);
    setJobDetails(updatedJobDetails);
  };

  return (
    <div className="experience-box">
      <h2>Experience</h2>

      {jobDetails.map((job, index) => (
        <div key={index} className="experience-field">
          <input
            className="experience-input1"
            type="text"
            placeholder="Company"
            value={job.company}
            onChange={(e) => handleInputChange(index, "company", e.target.value)}
          />
          <input
            className="experience-input2"
            type="text"
            placeholder="Position"
            value={job.position}
            onChange={(e) => handleInputChange(index, "position", e.target.value)}
          />
          {index === 0 ? (
            <button type="button" onClick={handleAddField}>
              Add
            </button>
          ) : (
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
