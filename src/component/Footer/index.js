import React from "react";
 
// import Container from 'react-bootstrap/Footer';

import "./style.css";

function Footer() {
  return (
    <Footer>
        <div className="container"class="z-depth-5">
            <div className="row"style="text-align: center;">
                <div className="col s2">
                        <a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/"><img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px" className="z-depth-3"></a>
                    </div>
                <div className="col s8" >
                    <div className="card indigo lighten-1" style="text-align: center;">                                               
                        <div className="row"><h5 className="orange-text text-lighten-1"> Phone: (919)637-5843</h5></div>
                        <div className="row"><h5 className="orange-text text-lighten-1"> Email: tclovingood01@gmail</h5></div>
                    </div>
                </div>
                <div className="col s2">
                    <a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px" className="z-depth-3"></a>
                </div>  
            </div>
        </div>
    </Footer>
  )
};

export default Footer;
