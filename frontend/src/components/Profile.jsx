import React, { useState } from "react";

function Profile() {
  // State for the input field
  const [username, setUsername] = useState("");

  // Handling function for input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="profile-box">
      <div className="profile">
        <h2 style={{fontSize:"1.4rem"}}>Profile</h2>
       
        <form className="profile-form">
          
            <textarea className="profile-input"
              rows="9"
              type="textarea"
              name="username"
              placeholder="I am an experienced and detail-oriented software engineer...."
              value={username}
              onChange={handleUsernameChange}
            />
         
         
        </form>
      </div>
    </div>
  );
}

export default Profile;
