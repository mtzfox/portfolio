import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='Mike Carlson'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Software Engineer'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '0.5em',
        }}
      />
      <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomepageHeading