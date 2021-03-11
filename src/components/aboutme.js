import React, { Component } from 'react'
// import 'react-slideshow-image/dist/styles.css';
// import { Fade } from 'react-slideshow-image';

// const fadeImages = [
//     'images/slide_5.jpg',
//     'images/slide_6.jpg',
//     'images/slide_7.jpg'
//   ];
  
//   const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Fade>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[0]} />
//             </div>
//             <h2>First Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[1]} />
//             </div>
//             <h2>Second Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={fadeImages[2]} />
//             </div>
//             <h2>Third Slide</h2>
//           </div>
//         </Fade>
//       </div>
//     )
//   }

class About extends Component {
    render() {
        return (
            <div className="aboutme-container">
              
                
          
                {/* <Slideshow /> */}
            <p className="aboutme-paragraph">Hello and welcome to my portfolio! My name is Jon and I am a 29 year old Software Engineer from Southern California. I got into coding a few years back and just last year graduated from General Assembly’s coding bootcamp. I spent many years competing with a team as professional gamer, and I think that experience alone has really helped me to work well with a team but when I’m not coding or gaming I am gardening and enjoying nature.</p>
            
            </div>
            
        )
    }
}
export default About;