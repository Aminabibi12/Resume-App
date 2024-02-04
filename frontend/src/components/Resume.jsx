import './App.css';
import React, { useState } from 'react';
import Name from './Name';
import Main from './main';
import ColourBar from './ColourBar';
import html2pdf from 'html2pdf.js';



function Resume() {
  const colorOptions = ["#DBCDF0", "#D8E2DC", "#FFE5D9", "#FFE9EE", "#C6DEF1"];
  const [selectedColor, setSelectedColor] = useState("#DBCDF0");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [level, setLevel] = useState('');
  const [field, setField] = useState('');

  const generatePdf = () => {
    const content = document.getElementById('resume-content');
   
    // content.style.marginTop='35px';
    // content.style.marginLeft='10px';
    // content.style.marginRight='10px';
   

    // Create a copy of the content
    const contentCopy = content.cloneNode(true);

    // Hide buttons and input fields in the copy
    const buttonsInCopy = contentCopy.querySelectorAll('button');
    buttonsInCopy.forEach((button) => {
      button.style.display = 'none';
    });

    const inputFieldsInCopy = contentCopy.querySelectorAll('input');
    inputFieldsInCopy.forEach((input) => {
      // Check if the input is for name or contact, show it, hide others
      if (input.name === 'fullName' || input.name === 'profession' || input.name === 'phone' || input.name === 'email'|| input.name === 'location' || input.name === 'profile' ) {
        input.style.display = 'block';
      } else {
        input.style.display = 'none';
      }
    });
    

    html2pdf(contentCopy, {
     
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });

   
    content.style.border = 'none';
    
  }

  
  return (
    <div className="resume-container">
      <div className="resume-wrapper">
        <div className="resume">
          <div className="color-bar">
            <ColourBar colors={colorOptions} onSelectColor={handleColorChange} />
          </div>

          <div id="resume-content">
            <Name selectedColor={selectedColor} />
            <Main />
          </div>
        </div>
      </div>
      <button
        className="download-button"
        style={{
          backgroundColor: 'rgb(6, 251, 255)',
          width: '200px',
          fontSize: '1.5rem',
          borderRadius: '15px',
          margin: '20px auto', // Center the button and provide margin
          display: 'block',    // Ensure it's a block-level element
        }}
        onClick={generatePdf}
      >
        Download
      </button>
    </div>
  );
}

export default Resume;
