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
        style={{
          boxShadow: "2px 2px 5px 0px grey",
          padding: "0.2rem",
          margin: "1rem 0.5rem"
        }}
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
              <Grid.Column width={11}>
                <Image fluid src={props.src} wrapped />
              </Grid.Column>
              <Grid.Column width={5}>
                <Modal.Description>
                  <Container className="project-description">
                    {props.longDescription}
                  </Container>
                </Modal.Description>
              </Grid.Column>
            </Grid>
          </Container>
        </Modal.Content>

        <Modal.Actions style={{ backgroundColor: "lightgray" }}>
          <Button onClick={() => setOpen(false)} positive>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </List>
  );
}
