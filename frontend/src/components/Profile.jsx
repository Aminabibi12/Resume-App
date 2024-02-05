import React, { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    const inputText = e.target.textContent;
    const words = inputText.trim().split(/\s+/);
    const limitedWords = words.slice(0, 100);
    const limitedText = limitedWords.join(" ");

    if (words.length <= 100) {
      setUsername(limitedText);
    } else {
      // Display a warning or handle the condition as needed
      console.log("Word limit reached");
      e.target.textContent = limitedText; // Update the contentEditable div to show the limited text
    }
  };

  return (
    <div className="profile-box">
      <div className="profile" style={{}}>
        <h2 style={{ fontSize: "1.4rem",marginLeft: '2px' }}>Profile:</h2>

        <div 
          className="profile-input"
          contentEditable="true"
          onInput={handleUsernameChange}
          placeholder="I am an experienced and detail-oriented software engineer...."
        ></div>
        <p style={{ color: "gray", fontSize: "0.8rem" }}>
          100 words only
        </p>
      </div>
    </div>
  );
}

export default Profile;
