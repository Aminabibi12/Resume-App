import React from "react";
import Skills from "./Skills";
import Language from "./Language";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";

function Main () {

  return (

    <div className="main-box">

        <div className="main-box-1">

        < Skills />
        <Language />

        </div>

        <div className="main-box-2">
  
          <Profile />
          <Experience />
          <Education />

        </div>

    </div>

 )

}

export default Main;