import React from 'react'
import {
  Container, Segment, Grid, Image, Header, Icon, List
} from 'semantic-ui-react'

import ResponsiveContainer from './ResponsiveContainer'

import ProjectList from './components/Projects';

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
      
      .profile-image {
        border: 3px solid #c0cdf3; 
        position: absolute;
        z-index: 1;
        top: -4.5rem;
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
              I'm a Seattle-based software engineer, specializing in <strong>frontend
              development</strong> and <strong>UI design</strong>, and developing fullstack chops.
            </p>

            <p>
              My focus is primarily in <strong>JavaScript/Typescript</strong>, <strong>React</strong>, 
              &nbsp;<strong>CSS/Sass</strong>, <strong>Vue</strong> and associated libraries. 
              I have a lot of experience with <strong>Semantic UI</strong> and 
              &nbsp;<strong>Bootstrap</strong>, and I'm currently learning some new frameworks including 
              &nbsp;<strong>Tailwind</strong>, <strong>Material UI</strong>, <strong>Styled Components</strong>, among others.
            </p>
            <p>  
              Most of my career thus far has been spent working in digital marketing
              working in agency design for advertising, layout and user interface design, and 
              building applications as part of ad tech platforms. 
            </p>
            <p>
              I've also been a freelance web designer, have SEO experience, 
              I've ran a successful YouTube channel, and I regularly write as a part of 
              my <a href="https://obsidian.mikecarlson.io" target="_blank" rel="noreferrer">Obsidian PKM</a>. 
              I'm always looking for new opportunties to learn new technology and grow my skillset.
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

  
  <Segment className="projects">
    <Container textAlign='center'>
      <Header as='h1' inverted  color='purple' style={{ fontSize:'3em' }}>Projects</Header>
    </Container>
    <Grid style={{ borderRadius: 5 }} centered>
      <Grid.Column mobile={15} tablet={14} computer={12} widescreen={8}>

          <ProjectList />
      </Grid.Column>
    </Grid>
  </Segment>

  <Segment className="gallery" padded textAlign="center">
    <Container textAlign='center'>
      <Header as="h1" color='white' inverted style={{ fontSize:'3em' }}>Design Examples</Header>
    </Container>
  <Grid centered>
    <Grid.Column mobile={16} tablet={14} computer={12} widescreen={8}>
    
      <Gallery />
    </Grid.Column>
  </Grid>
  </Segment>

  <Segment inverted vertical style={{ padding: '0em 0em', background: 'var(--space-cadet)' }}>
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
