import React, { Component } from "react";
import {
  Grid,
  Menu,
  Segment,
  Image,
  Container,
  Header
} from "semantic-ui-react";

const projectList = [
  {
    id: 0,
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
    id: 2,
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

export default class Projects extends Component {
  state = { activeItem: projectList[0] };

  handleItemClick = (e, { item }) => this.setState({ activeItem: item });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <>
          <Menu attached="top" tabular>
            {projectList.map((item) => (
              <Menu.Item
                key={item.id}
                item={item}
                name={item.name}
                content={item.title}
                active={activeItem.id === item.id}
                onClick={this.handleItemClick}
              ></Menu.Item>
            ))}
          </Menu>
          <Segment attached="bottom">
            <Container id={activeItem.id}>
              <Grid>
                <Grid.Column width={7} verticalAlign="middle">
                  <Image src={activeItem.image} bordered verticalAlign="middle" as="a" href={activeItem.url} target="_blank" />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Container>
                    <Header as="h2">{activeItem.title}</Header>
                    <p>{activeItem.description}</p>
                    <ul>
                      {activeItem.tools.map((tool, i) => (
                        <li key={tool[i]}>{tool}</li>
                      ))}
                    </ul>
                  </Container>
                </Grid.Column>
              </Grid>
            </Container>
          </Segment>
        </>
      </div>
    );
  }
}