import React, { Component } from 'react'
import { Segment, Tab, Header } from 'semantic-ui-react'
import ProjectGrid from './components/ProjectGrid';

const panes = [
  { menuItem: 'Crypto Coin List', render: () => <Tab.Pane><ProjectGrid /></Tab.Pane> },
  // { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  // { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class Projects extends Component {
  state = {}

  handleChange = (e, data) => this.setState(data)

  render() {
    return (
      
        <Segment className='projects' style={{backgroundColor:'#0f1420'}}>
          <Header color='purple'><h1 class='ui violet inverted header'>Projects</h1></Header>
            <Tab panes={panes} onTabChange={this.handleChange} />
        </Segment>

    )
  }
}

export default Projects