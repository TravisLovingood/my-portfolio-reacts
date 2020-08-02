import React from "react";
 
import "../App.css"


function footer() {
  return (
    <div className="row">   

        <div className= "col s1"></div>
        <div className= "col s10">
            <div className= "container">  
                <div className="row">
                    <div className="card">
                        {/* <div className="col s2"></div> */}
                        <div className="col s12">
                            <div className="row">
                                <div className="col s1">
                                    <a href="https://www.linkedin.com/in/travis-lovingood-8868101a7/"><img src="links/linkedin.PNG" alt="Linkedin" height="50px" width="50px" className="z-depth-3"></img></a>
                                </div>
                                <div className="col s9" >                                               
                                    <div className="row"><h5 className="orange-text text-lighten-1"> Phone: (919)637-5843</h5></div>
                                    <div className="row"><h5 className="orange-text text-lighten-1"> Email: tclovingood01@gmail</h5></div>
                                </div>
                                <div className="col s2">
                                    <a href="https://github.com/TravisLovingood"><img src="links/github.PNG" alt="Github" height="50px" width="50px" className="z-depth-3"></img></a>
                                </div>
                            </div> 
                        </div>
                        {/* <div className="col s2"></div> */}
                    </div>
                </div>
            </div>            
        </div>
        <div className= "col s1"></div>
    </div>
  )
};

export default footer;
