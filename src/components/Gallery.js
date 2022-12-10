import React from "react";
import {
  Segment,
  Container,
  Card,
  Grid,
  Header,
  Pagination
} from "semantic-ui-react";
import GalleryItem from "./GalleryItem";
import GalleryNav from "./GalleryNav";
import galleryItems from "./galleryItems";

export default function Gallery() {
  return (
    <div className="Gallery">
      <Segment.Group>
        <Segment>
          <Container fluid textAlign="center">
            <Header as="h1">Design examples</Header>
          </Container>
        </Segment>
        <Container>
          <GalleryNav />
        </Container>
        <Segment>
          <Card.Group centered itemsPerRow={3} stackable>
            {galleryItems.map(({ ...props }) => (
              <GalleryItem key={props.id} {...props} />
            ))}
          </Card.Group>
        </Segment>
        <Segment as="div" padded>
          <Grid columns="equal">
            <Grid.Column></Grid.Column>
            <Grid.Column width={6}>
              <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
              />
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </div>
  );
}
