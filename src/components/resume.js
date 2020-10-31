import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Avatar from 'avataaars'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <Avatar
                                avatarStyle='Circle'
                                topType='ShortHairShortRound'
                                accessoriesType='Prescription02'
                                hairColor='Blonde'
                                facialHairType='Blank'
                                clotheType='Hoodie'
                                clotheColor='PastelGreen'
                                eyeType='Happy'
                                eyebrowType='DefaultNatural'
                                mouthType='Smile'
                                skinColor='Pale'
                            />
                            
                            
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Jonathan Rawlings</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>Chino, CA</p>
                        <h5>Phone</h5>
                        <p>(909)215-0173</p>
                        <h5>Email</h5>
                        <p>Jonraw8@gmail.com</p>
                        <h5>LinkedIn.com</h5>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

                    <Education
                        startYear={2020}
                        endYear={2020}
                        schoolName="General Assembly"
                        schoolDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                        />
                    
                        <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="Chaffey College"
                            schoolDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                    <Experience 
                        startYear={2013}
                        endYear={2020}
                        jobName="Disney"
                        jobDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                        />

                    <Experience 
                        startYear={2012}
                        endYear={2016}
                        jobName="Aaron Home"
                        jobDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={80}
                        
                            />
                            <Skills 
                            skill="React"
                            progress={70}
                        
                            />
                                <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        
                            />
                                    <Skills 
                            skill="Ruby On Rails"
                            progress={30}
                        
                            />


                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;