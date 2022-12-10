import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class GalleryNav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu compact text>
        <Menu.Item
          name="Layouts"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Design"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Misc Projects"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
