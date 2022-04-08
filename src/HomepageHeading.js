import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

const handleClick = (url) => {
  window.open(url);
};

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='Mike Carlson'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          color: '#c0cdf3',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      
      <Header
        as='h2'
        content='Software Engineer & UI Designer'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '0.5em',
        }}
      />
      <Divider placeholder />

        <Segment color='black' inverted>
    <Grid columns={2} stackable textAlign='center'>
        <Grid.Column width={5}>
        
        <Button size='big' inverted color='violet' onClick={() => handleClick('http://obsidian.mikecarlson.io')}>
        Obsidian
        <Icon name='right lightbulb outline' />
      </Button>
      
        </Grid.Column>
   

        <Grid.Column width={5}>
        <Button size='big' inverted color='purple' onClick={() => handleClick('https://github.com/mtzfox')}>
        Github
        <Icon name='right github' />
      </Button>
      
        </Grid.Column>

    </Grid>
    </Segment>
 
      
      
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomepageHeading