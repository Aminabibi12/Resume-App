import React from "react";
import {useNavigate, useLocation } from 'react-router-dom';
import logoSrc from './images/logo.png';


function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/resume');
  };

return (

    

    <div className="navbar-box">


    <div className="logo-img">
      <img src={logoSrc} alt="Logo" />
     
    </div> 

        <div className="navbar-p">

        <p>ResumeRise</p>

        </div>
        
        <div className="nav-btn-box">
           
           {location.pathname === '/' && (
        <button className='navbar-btn' onClick={handleClick}>Start</button>
      )}
        </div>

    </div>

)

}

export default Navbar;