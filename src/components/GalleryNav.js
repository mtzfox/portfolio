import React from "react";
import { Menu } from "semantic-ui-react";



export function GalleryNav({ onClick, activeType }) {


  return (
    <Menu inverted pointing secondary>
      <Menu.Item
        name="Components"
        active={activeType === "component"}
        category="component"
        onClick={onClick}
      />
      <Menu.Item
        name="Layouts"
        active={activeType === "layout"}
        category="layout"
        onClick={onClick}
      />
      <Menu.Item
        name="Design"
        active={activeType === "design"}
        category="design"
        onClick={onClick}
      />
    </Menu>
  );
}
