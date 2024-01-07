import React from "react";
import Skills from "./Skills";
import Language from "./Language";
import Profile from "./Profile";
import Experience from "./Experience";

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

        </div>

    </div>

 )

}

export default Main;