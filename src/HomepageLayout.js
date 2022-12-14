import React from 'react'
import {
  Container, Segment, Grid, Image, Header, Icon, List
} from 'semantic-ui-react'

import ResponsiveContainer from './ResponsiveContainer'

import ProjectList from './Projects2';

import Gallery from './components/Gallery.js';

const handleClick = (url) => {
  window.open(url);
};

const HomepageLayout = () => (
  <ResponsiveContainer>
  <style>
      {`
      html, body {
        background-color: #252839;
      }
      p {
        align-content: center;
        color: #c0cdf3;
      }
      a {
        color: #82aaff;
        font-weight: 600;
      }
      .about-me > h1 {
        color: #A087C0;
      }
      div.about-me { 
        margin: 0em; 
        background-color: #252839;
      }
      div.about-text {
        margin: 3rem 0;
      }
      .profile-image {
        border: 3px solid #c0cdf3; 
        position: absolute;
        z-index: 1;
        top: -4.5rem;
      }
      .profile-skills {
        background-color: transparent;
      }
      .profile-skills .segments .segment {
        background-color: #3a325577;
      }
      .profile-skills h3.ui.header {
        margin-bottom: 0;
      }
      .profile-skills .list.skill-list {
        margin: 0.25rem 0 0 0rem;
        text-align: center;
      }
      .profile-skills .skill-list > .item {
        display: inline-block;
        list-style: none;
        line-height: 1.3;
      }
      ul.ui.horizontal.bulleted.list li::before, 
      .ui.horizontal.bulleted.list > .item::before {
        color: #A087C0;
      }
      .about-text p {
        font-size: 1.2em;
        font-weight: 600;
        word-break: unset;
        hyphens: none;
      }
      .about-me > div {
        background-color: #0f1420;
        padding: 0;
      }
      
      .segment.about-me {
        padding: 0rem;
        margin: 8vw;
        background-color: #252839;
      }
      .segment p {
        font-size: 1.3em;
      }

    `}
    </style>


  

  <Segment className="about-me">
    <Grid style={{ borderRadius: 5 }} container columns={2} inverted stackable>
      <Grid.Row textAlign="justified" style={{ padding: 10 }}>
      
      <Grid.Column mobile={16} tablet={10} computer={10} className='about-column' padded>
          

          <Container fluid text textAlign='left' className='about-text' >
            <Header as='h1' inverted color='violet' style={{ fontSize:'3em' }}>About Me</Header>
            <p>
              I'm a Seattle-based software engineer, specializing in front-end
              web development.
            </p>

            <p>
              My professional interests are in JavaScript, React, CSS and design
              for layout, user interface, and branding for the web.
            </p>

            <p>
              Trained in commercial design, most of my career has been spent in
              digital marketing services for the automotive industry.
            </p>
          </Container>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6} style={{ padding: 10 }} className='profile-skills' >
  
        <Segment.Group raised>
   
          <Segment size='small' style={{ height: 70 }} inverted >
            <Image src='./assets/images/profile-square1.png' size='small' className='profile-image' circular
            centered />
          </Segment>
          <Segment inverted style={{ paddingTop: 50 }} textAlign='center' >
            <Header as='h3'>Skills</Header>
            <List className='skill-list' bulleted horizontal as='ul'>
              <List.Item>HTML/CSS</List.Item>
              <List.Item>Less/Sass</List.Item>
              <List.Item>JavaScript ES6</List.Item>
            </List>
            <List className='skill-list' bulleted horizontal>
              <List.Item>React</List.Item>
              <List.Item>Bootstrap</List.Item>
              <List.Item>Semantic UI</List.Item>
            </List>
            <List className='skill-list' bulleted horizontal>
              <List.Item>UI Design</List.Item>
              <List.Item>Photoshop</List.Item>
              <List.Item>VS Code</List.Item>
            </List>
            <List className='skill-list' bulleted horizontal>
              <List.Item>Git</List.Item>
              <List.Item>Jest/TDD</List.Item>

              <List.Item>Scrum</List.Item>
            </List>
            <Segment.Inline><Icon name='window minimize outline' color='purple'></Icon></Segment.Inline>
            
            
            <Header as='h3'>Work Experience</Header>
            <List className='skill-list' bulleted horizontal as='ul'>
              <List.Item><List.Content as='a' onClick={() => handleClick('https://www.linkedin.com/in/mike-carlson-seattle/')}>Sincro Digital</List.Content></List.Item>
              <List.Item><List.Content as='a' onClick={() => handleClick('https://www.linkedin.com/in/mike-carlson-seattle/')}>CDK Global</List.Content></List.Item>
              <List.Item><List.Content as='a' onClick={() => handleClick('https://www.linkedin.com/in/mike-carlson-seattle/')}>The Cobalt Group</List.Content></List.Item>
            </List>

            <Segment.Inline><Icon name='window minimize outline' color='purple'></Icon></Segment.Inline>

            <Header as='h3'>Education</Header>
            <p>Associates of Applied Arts, 
              <br />Interactive Media Design</p>
          </Segment>
        </Segment.Group>

      </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

  
  <Segment style={{backgroundColor:'#0f1420', paddingBottom:"3rem"}} inverted className="projects">
    <Container textAlign='center' style={{ padding: "1rem", marginBottom:"1rem" }}>
      <Header as='h1' inverted  color='purple' style={{ fontSize:'3em' }}>Projects</Header>
    </Container>
    <Grid style={{ borderRadius: 5 }} centered>
      <Grid.Column mobile={15} tablet={14} computer={12} widescreen={8}>

          <ProjectList />
      </Grid.Column>
    </Grid>
  </Segment>

  <Segment style={{backgroundColor: 'var(--black-pearl), margin: 0.5em auto'}}>
  
  <Grid centered padded style={{padding: '0 1em'}}>
    <Grid.Column mobile={16} tablet={14} computer={14} widescreen={14}>
    
      <Gallery />
    </Grid.Column>
  </Grid>
  </Segment>

  <Segment inverted vertical style={{ padding: '0em 0em' }}>
      <Container>
        <Grid inverted textAlign='center'>
          <Grid.Row>
            <Grid.Column width={12}>
              <Header as='h4' inverted>
              Ⓒ Copyright 2022 Mike Carlson. 
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  </ResponsiveContainer>
)

export default HomepageLayout
