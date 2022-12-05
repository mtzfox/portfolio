import React, { Component } from 'react'
import { Menu, Segment, Grid, Rail, Image } from 'semantic-ui-react'


const projectList = [
  {
    id: 1,
    name: "breaking news search",
    title: "Breaking News Search",
    description:
      "This is React app that returns API news results after form submit. Includes pagination to load more results.",
    image: "./assets/images/breaking-news-app.png",
    url: "https://mtzfox.github.io/breaking-news-app/",
    slug: "breaking-news-search",
    tools: ["React", "CSS", "Vite.js", "semantic UI", "async/await fetch", "rapid API"]
  },
  {
    id: 2,
    name: "crypto coin list",
    title: "Crypto Tracker",
    description:
      "This is a simple web app for displaying current information about top crypto coins.",
    image: "./assets/images/crypto-app.png",
    url: "https://mtzfox.github.io/crypto-coin-app/",
    slug: "crypto-coin-list",
    tools: ["Vite", "Pico.css", "SCSS", "Axios", "Coinstats API"]
  },
  {
    id: 3,
    name: "star rating widget",
    title: "Star Rating Widget",
    description:
      "This is a widget for selecting a star rating, with added form for submitting a review.",
    image: "./assets/images/star-rating-widget.png",
    url: "https://codesandbox.io/s/star-rating-widget-n6vjuk",
    slug: "star-rating-widget",
    tools: ["Vanilla JavaScript", "CSS", "HTML", "Font Awesome"]
  }
];


const ProjectGrid = ({ projectList }) => {   
      <>

        <Grid centered columns={2}>
          <Grid.Column>
            <Segment>

              <Rail dividing position='left'>
                <Segment>Left Rail Content</Segment>
              </Rail>

              <Rail dividing position='right'>
                <Segment>Right Rail Content</Segment>
              </Rail>
            </Segment>
          </Grid.Column>
        </Grid>

      </>
  }


export default class ProjectList extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
      
      <Segment inverted>
      
        <Menu inverted pointing secondary>
        {projectList.map((project) => (
          <Menu.Item
            name={project.name}
            active={activeItem === project.name}
            onClick={this.handleItemClick}
          />
          
        ))}
        </Menu>
      </Segment>
      
      <Segment inverted style={{minHeight: "400px"}}>
        <ProjectGrid project={projectList[0]} />
      </Segment>
      
      </>
      );
    }
}