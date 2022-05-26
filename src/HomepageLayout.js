
import React from 'react'
import {
  Container, Segment, Grid, Image, Header
} from 'semantic-ui-react'

import ResponsiveContainer from './ResponsiveContainer'

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
      .about-me > h2 {
        color: #A087C0;
      }
      div.about-me { 
        margin: 0em; 
        background-color: #252839;
      }
      
      .about-me > div {
        background-color: black;
        padding: 0;
      }
      .segment.about-me {
        background-color: #252839;
      }

    `}
    </style>


  <Segment className="about-me">
    <Grid container style={{ borderRadius: 5 }} celled="internally" textAlign="left" columns={2} divided inverted stackable>
      <Grid.Row textAlign="justified" style={{ padding: 10 }}>
      <Grid.Column mobile={16} tablet={6} computer={5} style={{ padding: 10 }} >
          <Image src='./assets/images/profile-square1.png' size='medium' circular
            fluid
            bordered centered />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11} style={{ margin: 0, paddingRight: 30 }}>
          

          <Container fluid text >
          <Header as='h2' inverted color='violet'>About Me</Header>
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
        
      </Grid.Row>
    </Grid>
  </Segment>
{/*
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='https://mikecarlson.io'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>*/}

    {/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>  */}
  </ResponsiveContainer>
)

export default HomepageLayout
