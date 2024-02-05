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
  
    const contentCopy = content.cloneNode(true);
  
    const buttonsInCopy = contentCopy.querySelectorAll('button');
    buttonsInCopy.forEach((button) => {
      button.style.display = 'none';
    });
  
    const inputFieldsInCopy = contentCopy.querySelectorAll('input');
    inputFieldsInCopy.forEach((input) => {
      if (input.name === 'fullName' || input.name === 'profession' || input.name === 'phone' || input.name === 'email' || input.name === 'location' || input.name === 'profile') {
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
      onAfterHtmlToPdf: (pdf) => {
        // Add borders to each page
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);
          pdf.rect(5, 5, 200, 287); // Adjust the values as needed
        }
      },
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
