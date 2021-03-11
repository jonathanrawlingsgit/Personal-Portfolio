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

                        <h2 style={{paddingTop: '2em', color: 'white'}}>Jonathan Rawlings</h2>
                        <h4 style={{color: 'white'}}>Programmer</h4>
                        {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} /> */}
                        {/* <p>Hi my name is Jon and I am full-stack software developer. I have worked with 
                        </p> */}
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        {/* <h5>Address</h5>
                        <p>Chino , CA</p>
                        <h5>Email</h5>
                        <p>Jonraw8@gmail.com</p> */}
                        {/* <h5>LinkedIn.com</h5>
                        <p></p> */}
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                
                    <h2>Experience</h2>
                    <Experience 
                        startYear={2021}
                        endYear={"Present"}
                        jobName="Cien Coco - Lead Web Designer"
                        jobDescription="Fully functional eCommerce mobile web app. Made with React.js."
                        />

                    <Experience 
                        startYear={2013}
                        endYear={2020}
                        jobName="Disney - Waiter/Busser"
                        jobDescription="Job details include working daily with a large team, under strict guidlines and high customer volume. "
                        />

                    
                        <h2>Education</h2>

                    <Education
                    startYear={2020}
                    endYear={2020}
                    schoolName="General Assembly"
                    schoolDescription="Full-Stack Software Engineering Program with over 480 hours of instruction, labs and projects."
                    />

    {/* <Education 
        startYear={2012}
        endYear={2016}
        schoolName="Chaffey College"
        schoolDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
        />
        <hr style={{borderTop: '3px solid #e22947'}} /> */}

   
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={90}
                        
                            />
                            <Skills 
                            skill="React.js"
                            progress={80}
                        
                            />
                            <Skills 
                            skill="Python"
                            progress={70}
                        
                            />
                                <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        
                            />
                                    <Skills 
                            skill="Ruby On Rails"
                            progress={70}
                        
                            />


                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;