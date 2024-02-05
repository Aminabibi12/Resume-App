import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Language() {
  const [newLanguage, setNewLanguage] = useState("");
  const [languages, setLanguages] = useState([]);

  const handleLanguageChange = (e) => {
    setNewLanguage(e.target.value);
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim() !== "") {
      setLanguages([...languages, newLanguage]);
      setNewLanguage("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="language-box">
      <h2 style={{fontSize:"1.2rem", textAlign:"left", marginLeft:"3px"}}>Laguages:</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            placeholder="Language"
            type="text"
            name="Language"
            value={newLanguage}
            onChange={handleLanguageChange}
          />
          <button type="button" onClick={handleAddLanguage}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>

      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language}
            <button
              type="button"
              onClick={() => handleRemoveLanguage(index)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Language;
