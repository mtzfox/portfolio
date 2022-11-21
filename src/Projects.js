import React, { Component } from 'react'
import { Segment, Tab } from 'semantic-ui-react'
import ProjectGrid from './components/ProjectGrid';

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane><ProjectGrid /></Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class Projects extends Component {
  state = {}

  handleChange = (e, data) => this.setState(data)

  render() {
    return (
      <Segment>
        <Tab panes={panes} onTabChange={this.handleChange} />
      </Segment>
    )
  }
}

export default Projects