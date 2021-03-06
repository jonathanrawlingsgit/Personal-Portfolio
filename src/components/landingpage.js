import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Avatar from 'avataaars'


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                
                <Grid className='landing-grid'>
                    <Cell col={12}>
                    
                           {/* <Avatar
                                avatarStyle='Circle'
                                topType='ShortHairShortRound'
                                accessoriesType='Prescription02'
                                hairColor='Blonde'
                                facialHairType='Blank'
                                clotheType='Hoodie'
                                clotheColor='black'
                                eyeType='Happy'
                                eyebrowType='DefaultNatural'
                                mouthType='Smile'
                                skinColor='Pale'
                            /> */}
                            

                          <div className="banner-text">
                          <h1 className="name">Jonathan Rawlings</h1>
                              <h1>Full-Stack Software Engineer</h1>

                              <hr/>

                              <p> HTML/CSS  |  JavaScript  |  React.js  | Node.js |  Express.js  |  Python  | Django | Ruby on Rails   </p>
                              <div className="social-links">

                                  {/* LinkedIn */}
                                  <a href="https://www.linkedin.com/in/jonathanorawlings/" rel="noopener noreferrer" target="_blank">
                                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                                  </a>

                                  {/* Github */}
                                  <a href="https://github.com/jonathanrawlingsgit" rel="noopener noreferrer" target="_blank">
                                      <i className="fa fa-github-square" aria-hidden="true" />
                                  </a>
                                 
                                 {/* Youtube */}
                                 {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                      <i className="fa fa-youtube-square" aria-hidden="true" />
                                  </a> */}
                                

                              </div>
                          </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;