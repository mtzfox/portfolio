import React from "react";
import { Segment, Header, List } from "semantic-ui-react";
import GalleryItem from "./GalleryItem";
import { GalleryNav } from "./GalleryNav";
import galleryItems from "./galleryItems";

export default function Gallery() {
  

  const [items, setItems] = React.useState(galleryItems);

  const layoutList = galleryItems.filter((item) => item.type === "layout");
  const designList = galleryItems.filter((item) => item.type === "design");
  const componentList = galleryItems.filter((item) => item.type === "component");

  const [activeType, setActiveType] = React.useState('layout');

  //activeItem = activeType.activeItem;
  
  const handleChange = (e, { category }) => {
    setActiveType(category);
    handleFilterItems(category);
  };
  

  function handleFilterItems(category) {
    if (category === "layout") {
      setItems(layoutList);
      console.log("layoutList")
    } else if (category === "design") {
      setItems(designList);
      console.log("designList")
    } else if (category === "component") {
      setItems(componentList);
      console.log("componentList")
    } 
  };
  

  const CardList = () => {
    return (
      <List.Item className="card-grid">
        {items.map(({ ...props }) => (
          <GalleryItem key={props.id} {...props} />
        ))}
      </List.Item>
    );
  };

  return (
    <div className="gallery">
      <Segment.Group>
        <Segment inverted textAlign="center" secondary>
          <Header as="h1">Design examples</Header>
        </Segment>

        <Segment inverted secondary style={{ textAlign: "center" }}>
          <GalleryNav onClick={handleChange} />
        </Segment>
        <Segment inverted tertiary className="card-grid">
          {CardList(activeType)}
        </Segment>
        <Segment inverted secondary padded></Segment>
      </Segment.Group>
    </div>
  );
}
