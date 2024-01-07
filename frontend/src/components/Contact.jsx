import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact({ selectedColor }) {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="contact-container"  style={{ backgroundColor: selectedColor }}>
     
      <div className="phone"  style={{ backgroundColor: selectedColor }}>
        <FontAwesomeIcon icon={faPhone} />
       
        <input style={{ backgroundColor: selectedColor }}
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      
      <div className="map"  style={{ backgroundColor: selectedColor }}>
        < FontAwesomeIcon icon={faMapMarker} />
       
        <input  style={{ backgroundColor: selectedColor }}
          type="text"
          placeholder="Location"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
     
      <div className="email"  style={{ backgroundColor: selectedColor }}>
        <FontAwesomeIcon icon={faEnvelope} />
       
        <input  style={{ backgroundColor: selectedColor }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Contact;
