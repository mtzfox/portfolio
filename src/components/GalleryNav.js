import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class GalleryNav extends Component {
  state = { activeItem: "home" };
  

  handleItemClick = (e, { slug }) => this.setState({ activeItem: slug });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu borderless compact inverted>
        <Menu.Item
          name="Layouts"
          slug="layout"
          active={activeItem === "layout"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Components"
          slug="component"
          active={activeItem === "components"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Design"
          slug="design"
          active={activeItem === "design"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
