import React, { Component } from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    'images/slide_5.jpg',
    'images/slide_6.jpg',
    'images/slide_7.jpg'
  ];
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
            <h2>First Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    )
  }

class About extends Component {
    render() {
        return (
            <div className="aboutme-container">
              
                
                <h2>About</h2>
                <Slideshow />
            <p className="aboutme-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
            </div>
            
        )
    }
}
export default About;