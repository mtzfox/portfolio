import React from "react";
import { Card, Image, Modal, Button, Grid, Container } from "semantic-ui-react";

export default function GalleryItem(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card id={props.id} className="card" onClick={() => setOpen(true)} link>
      <Image fluid src={props.src} alt={props.title} />
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>

        <Card.Meta>
          <span className="date">Created {props.createdDate}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {/* MODAL  */}
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button blurring>More Info</Button>}
          title={props.title}
          image={props.src}
          dimmer="blurring"
          actions={["Snooze", { key: "done", content: "Done", positive: true }]}
        >
          <Modal.Header>{props.header}</Modal.Header>

          <Modal.Content>
            <Container>
              <Grid columns={2} stackable padded>
                <Grid.Column width={12}>
                  <Image fluid src={props.src} wrapped />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Modal.Description>
                    <Container className="project-description">
                      {props.longDescription}
                    </Container>
                  </Modal.Description>
                </Grid.Column>
              </Grid>
            </Container>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} positive>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
  );
}
