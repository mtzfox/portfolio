import React from "react";
import { Segment, List } from "semantic-ui-react";
import GalleryItem from "./GalleryItem";
import { GalleryNav } from "./GalleryNav";
import galleryItems from "./galleryItems";

export default function Gallery() {
  

  const [items, setItems] = React.useState(galleryItems);

  const layoutList = galleryItems.filter((item) => item.type === "layout");
  const designList = galleryItems.filter((item) => item.type === "design");
  const componentList = galleryItems.filter((item) => item.type === "component");
  
  //const { activeType } = state
  
  const [state, setState] = React.useState('component');

  //activeItem = activeType.activeItem;
  

  const handleChange = (e, { category }) => {
    setState(category);
    handleFilterItems(category);
  };
  

  function handleFilterItems(category) {
    if (category === "layout") {
      setItems(layoutList);
      //setState('layout');
      console.log("layoutList")
    } else if (category === "design") {
      setItems(designList);
      //setState('design');
      console.log("designList");
    } else if (category === "component") {
      setItems(componentList);
      //setState('component');
      console.log("componentList");
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
    <div>
      <Segment.Group>
        <Segment inverted secondary style={{ textAlign: "center", background:"var(--dark-purple" }}>
          <GalleryNav onClick={handleChange} activeType={state} className='gallery-nav' />
          
        </Segment>
        
        <Segment inverted tertiary className="card-grid">
          {CardList(state)}
        </Segment>
        <Segment inverted secondary padded style={{background:"var(--dark-purple" }}></Segment>
      </Segment.Group>
    </div>
  );
}