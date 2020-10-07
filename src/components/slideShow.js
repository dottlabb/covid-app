import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Covid1 from "../images/covidtips.png";
import Covid2 from "../images/covidwashh.png";
import Covid3 from "../images/covidcoughsleave.png";
import Covid4 from "../images/covidclean.png";
import Covid5 from "../images/covidstay.png";



// import Box from "@material-ui/core/Box";
const fadeImages = [Covid1, Covid2, Covid3, Covid4, Covid5];

export default function SlideShow() {
  return (
    <div className="slide-container" style={{height:550, width:270}}>
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="covid Sign1" style={{height:550, width:270}} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="covid Sign2" style={{height:550, width:270}} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="covid Sign3" style={{height:550, width:270}}/>
          </div>

          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} alt="covid Sign4" style={{height:550, width:270}}/>
            </div>
          </div>

          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} alt="covid Sign5" style={{height:550, width:270}}/>
            </div>
          </div>
        </div>
      </Fade>
    
    
    
    
    </div>
  
  );
}
