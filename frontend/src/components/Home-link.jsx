import React from "react";
import {useNavigate, useLocation } from 'react-router-dom';

function HomeLink() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/resume');
  };


    return (

        <div className="home-link-box">

        <div className="home-link">

          <img src="https://cdni.iconscout.com/illustration/premium/thumb/employee-cv-resume-list-5684911-4737124.png?f=webp" alt="" />
        
        <p>
        Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Create an awesome resume in minutes. Easy to use and done within minutes - try now for free!
        </p>
   
        </div>

         <div className="link-btn-box">
           
          {location.pathname === '/' && (
          <button className='navbar-btn' onClick={handleClick}>Create My Resume</button>
        )}
      </div>

     </div>

    )

}
export default HomeLink;