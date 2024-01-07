import React from "react";

function HomeCards() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-body">
          <img src="https://img.freepik.com/free-vector/hr-managers-hiring-candidates-with-hr-software-resume-computer-hr-software-human-resources-technology-employee-effectivity-control-concept_335657-738.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais" alt="" className="card-img-top"
          style={{marginTop:"0px", height:"250px"}}
          />
          <p className="card-text">ResumeRise, your personalized platform for crafting and enhancing your professional identity. At ResumeRise, we understand the pivotal role a resume plays in your career journey, building and achievments..</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <img src="https://img.freepik.com/free-vector/social-biography-concept-illustration_114360-7181.jpg?size=626&ext=jpg&ga=GA1.2.430224270.1704229904&semt=ais" alt="" className="card-img-top"
           style={{marginTop:"0px", height:"250px"}}
          />
          <p className="card-text">Our user-friendly interface and innovative features empower you to create compelling and impactful resumes that stand out in today's competitive job market. We offering a seamless experience to build and customize resumes.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <img src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5112.jpg?size=626&ext=jpg&ga=GA1.1.430224270.1704229904&semt=ais" alt="" className="card-img-top"
           style={{marginTop:"0px", height:"250px"}}
          />
          <p className="card-text">Stay ahead in your career with ResumeRise's continuous updates and valuable resources. Whether you're a seasoned professional looking for a career change or a recent graduate entering the workforce.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
