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
                    <h2>Education</h2>

                    <Education
                        startYear={2020}
                        endYear={2020}
                        schoolName="General Assembly"
                        schoolDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                        />
                    
                        {/* <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="Chaffey College"
                            schoolDescription="General Assembly is a private, for-profit education organization founded in early 2011. It maintains campuses in numerous countries throughout the world to teach entrepreneurs and business professionals practical technology skills.It provides courses in mobile and software engineering, data science, product management, and other digital-related courses."
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} /> */}

                        <h2>Experience</h2>

                    <Experience 
                        startYear={2013}
                        endYear={2020}
                        jobName="Disney - Waiter/Busser"
                        jobDescription=" 
                         One of the highest grossing restaurants in Disneyland. Job duties included: working with a large team daily, serving and communicating with guests from every walks of life, problem solving and making every guests experience a special one."
                        />

                    <Experience 
                        startYear={2012}
                        endYear={2016}
                        jobName="Aaron Home - Care-Taker"
                        jobDescription="Aaron Home is a government funded adult group home for the developmentally disabled. I worked there for 4 years as a caretaker for the clients on site. Job duties included: feeding, bathing , and transporting each client while treating each person with respect and helping them do what they can't do for themselves."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={90}
                        
                            />
                            <Skills 
                            skill="React"
                            progress={80}
                        
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