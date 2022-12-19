import React from "react";
import {
  Card,
  Image,
  List,
  Modal,
  Button,
  Grid,
  Container
} from "semantic-ui-react";

export default function GalleryItem(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <List horizontal>
      <Card
        id={props.id}
        className="card"
        onClick={() => setOpen(true)}
      >
        <Image src={props.src} alt={props.title} />
      </Card>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        title={props.title}
        image={props.src}
        dimmer="blurring"
      >
        <Modal.Header style={{ backgroundColor: "lightgray" }}>
          {props.header}
        </Modal.Header>

        <Modal.Content>
          <Container>
            <Grid columns={2}>
              <Grid.Column tablet={11} computer={11} mobile={16}>
                <Image fluid src={props.src} wrapped />
              </Grid.Column>
              <Grid.Column tablet={5} computer={5} mobile={16}>
                <Modal.Description>
                  <Container className="project-description">
                    <span>{props.description}</span>
                    <span>{props.longDescription}</span>
                  </Container>
                </Modal.Description>
              </Grid.Column>
            </Grid>
          </Container>
        </Modal.Content>

        <Modal.Actions style={{ backgroundColor: "lightgray" }}>
          <Button color='violet' onClick={() => setOpen(false)}>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </List>
  );
}
