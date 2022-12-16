import React from "react";
import { Menu } from "semantic-ui-react";



export function GalleryNav({ onClick, activeType }) {
  // const onClick = (e, { category }) => {
  //   console.log(category);
  //   console.log(category);
  // }
  return (
    <Menu borderless compact inverted>
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
      <Menu.Item
        name="Components"
        active={activeType === "component"}
        category="component"
        onClick={onClick}
      />
    </Menu>
  );
}
