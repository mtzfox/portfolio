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
    title: "Crypto Coin List",
    description:
      "This is a simple web app for displaying current information about top crypto coins.",
    image: "./assets/images/crypto-app.png",
    slug: "crypto-coin-list",
    tools: ["Vite", "Pico.css", "SCSS", "Axios", "Coinstats API"]
  },
  {
    id: 1,
    name: "star rating widget",
    title: "Star Rating Widget",
    description:
      "This is a widget for selecting a star rating, with added form for submitting a review.",
    image: "./assets/images/star-rating-widget.png",
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
                <Grid.Column width={7}>
                  <Image src={activeItem.url} bordered />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Container>
                    <Header as="h2">{activeItem.name}</Header>
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