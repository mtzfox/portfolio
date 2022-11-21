import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const cryptoImg = './assets/images/crypto-app.png'

const projectList = [
  {
    "id": "001",
    "name": "Crypto Coin List",
    "description": "This is a simple web app for displaying current information about top crypto coins.",
    "image": "\"/images/wireframe/image.png\"",
    "slug": "crypto-coin-list",
    "active": false
  }
]


const ProjectGrid = () => (
    projectList && projectList.map((project) => (

    //let { id, name, description, tools, image, slug, active } = project;   
    
    <Segment className="projects">
        <Grid id={project.id} stackable>
            <Grid.Column width={7}>
                <Image verticalAlign='middle' style={{border:"1px solid #A087C0"}} src={cryptoImg} as='a' centered href='https://mtzfox.github.io/crypto-coin-app/' target='_blank' />
            </Grid.Column>
            <Grid.Column width={9}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h3>Built with:</h3>
                <ul>
                    <li>Vite</li> 
                    <li>Pico.css</li> 
                    <li>SCSS</li> 
                    <li>Axios</li>
                    <li>Coinstats API</li>
                </ul>
            </Grid.Column>
        </Grid>
    </Segment>
    ))
)
export default ProjectGrid