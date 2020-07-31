import React from "react";

// import col from "react-bootstrap/col";
// import row from"react-bootstrap/row";
// import Navbar from "../component/Navbar";

const About = () => {
  return (
    <div>
      <div className= "Container" class="z-depth-5">
        <div className="row"class="text-align: center;">
          <div className="col s2"></div>
          <div className="col s8">
            <div className="card indigo lighten-1">
              <div className="card-action">
                <p>
                  Greetings, I am a newly graduated web developer offering knowledge and experience in various programming languages such as HTML, CSS, JQuery, and
                  JavaScript. I am skilled in translating solutions into code and responding to challenges by developing solutions, as well as designing web
                  applications for desktop, phone, and mobile app users. Please check out my links and portfolio below.
                </p>
              </div>
              <div className="card-action">
              <div className="row"class="text-align: center;">
                <div classNameN="col s4"><a href="links/resume.docx"><span className="text-decoration: underline;"> Resume</span></a></div>
                <div className="col s4"><a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/"><span className="text-decoration: underline;">LinkedIn</span></a></div>
                <div className="col s4"><a href="https://github.com/TravisLovingood"><span className="text-decoration: underline;">Github</span></a></div>
              </div>
            </div>
          </div>    
        </div>
        <div className="col s2"></div>
      </div>
    </div>
  </div>
  );
}

export default About;