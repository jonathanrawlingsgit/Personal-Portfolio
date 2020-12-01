import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Icon } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories() {
    if(this.state.activeTab === 0 ){
        return(
         <div className='projects-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png)'}}>React Project #1</CardTitle>
                <CardText>
                    asdjflasdfjaslksdjkfjkasdfkalksdf;aslkdfasdf
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    {/* <Button colored>CodePen</Button> */}
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/ppjMhfv.jpg)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>GoldenGun</CardTitle>
                <CardText>
                Vanilla JS Web Browser point and click shooting game
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    {/* <Button colored>CodePen</Button> */}
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(https://i.imgur.com/gwxHIff.png)',backgroundPosition:'center',backgroundSize:'cover'}}>Apex-Stat-Tracker</CardTitle>
                <CardText>
                    Video game stat tracking App created using JavaScript and Vue.js
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    
                    {/* <Button colored>CodePen</Button> */}
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
           </div> 
        
        )
    }else if(this.state.activeTab === 1) {
        return (
            <div><h1>This is Ruby On Rails</h1></div>
        )
    }else if(this.state.activeTab ===2) {
        return (
            <div><h1>This is Vanilla JavaScript</h1></div>
        )
    }else if(this.state.activeTab === 3) {
        return <div><h1>This is VuesJs</h1></div>
    }
    
}


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    {/* <Tab>React</Tab>
                    <Tab>Ruby On Rails</Tab>
                    <Tab>JavaScript</Tab> */}
                    {/* <Tab>Vues Js</Tab> */}
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
                
            </div>
        )
    }
}
export default Projects;