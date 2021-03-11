import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jonathan Rawlings</h2>
                        <img src="https://i.imgur.com/nvNCtYj.png"
                        alt='avatar'
                        style={{height: '250px', border: '1px solid black'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me anytime for job inquiries, freelance work, or any other questions you might have!
</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                            <div className="contact-list">                        

                        <List>
                            <ListItem>
                                
                                <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                
                                LinkedIn.com/jonathanorawlings
        
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                
                                <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                               
                                Jonraw8@gmail.com
                                </ListItemContent>
                            </ListItem>

                            {/* <ListItem>
                                
                                <ListItemContent style={{fontSize: '32px', fontFamily: 'Anton'}}>
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                                @SeVeRiNcE_
                                </ListItemContent>
                            </ListItem> */}
                            </List>
                        
                            </div>



                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;