import React, {useState} from "react";
import { Segment, Header, Card, List } from "semantic-ui-react";
import GalleryItem from "./GalleryItem";
import GalleryNav from "./GalleryNav";
import galleryItems from "./galleryItems";

export default function Gallery() {
  const [state,setState] = useState({ activeItem:'component' });
  
  const handleItemClick = (e, { slug }) => setState({ activeItem: slug });
  
  const category = galleryItems.filter(item =>
    item.type === state.activeItem
  );
   
  

    // function CardItem() {
    //   return (
    //     <List className="card-grid">
    //     {galleryItems.filter(items => 
    //       items.type === state.activeItem).map(({...props}) => (
    //         <GalleryItem key={props.id} {...props} />
    //       ))}
    //     </List> 
    //   )
    // }
      
    return (
      <div className="gallery">
        <Segment.Group mobile={16} tablet={14} desktop={10} widescreen={10} >
          <Segment inverted textAlign="center" secondary>
            <Header as='h1' centered style={{ fontSize:'3em', color:'var(--ebony-clay)' }}>Work Examples</Header>
          </Segment>

          <Segment inverted secondary style={{ textAlign: "center" }}>
            <GalleryNav props={handleItemClick} />
          </Segment>
          <Segment inverted tertiary>
      
            <Card.Group className="card-grid">
              <List className="card-grid">
                {category.map(({...props}) => {
                  <GalleryItem key={props.id} {...props} />
                })}
                {category.map(({...props}) => (
                  <GalleryItem key={props.id} {...props} />
                ))}
                
              {/* <CardItem {state.activeItem} /> */}
              </List>
            </Card.Group>
         
          </Segment>
          <Segment inverted secondary padded></Segment>
        </Segment.Group>
      </div>
    );
  }

