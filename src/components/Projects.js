import React, { Component } from "react";
import {
  Button,
  Grid,
  Icon,
  Menu,
  Segment,
  Image,
  Divider,
} from "semantic-ui-react";
import '../styles/style.css';
import projectList from './projectsList';

export default class ProjectList extends Component {
  state = { activeItem: projectList[0] };

  handleItemClick = (e, { item }) => this.setState({ activeItem: item });

  render() {
    const { activeItem } = this.state;

    return (
    <>
      <Segment attached="bottom" mobile={14} className="project-grid">
        <Grid padded>
          <Grid.Row only="mobile" verticalAlign='middle'>
            <Grid.Column mobile={16}>
              <Menu inverted defaultActiveIndex={1} size="huge" secondary stackable>

                    {projectList.map((item) => (
                      <Menu.Item
                      key={item.id}
                      item={item}
                      name={item.name}
                      content={item.title}
                      active={activeItem.id === item.id}
                      onClick={this.handleItemClick}
                    ></Menu.Item>
                      ))}
              </Menu>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row only="tablet computer desktop">
            <Grid.Column>

              <Menu inverted attached top tabular pointing secondary className="project-menu" stackable>
                  {projectList.map((item) => (
                    <Menu.Item
                      key={item.id}
                      item={item}
                      name={item.name}
                      content={item.title}
                      active={activeItem.id === item.id}
                      onClick={this.handleItemClick}
                    ></Menu.Item>
                  ))}

              </Menu> 
            </Grid.Column>  
          
          </Grid.Row>
          <Divider />
        </Grid>

        <Grid style={{minHeight:"300px"}} padded>
          <Grid.Row className="project-row">
            
            <Grid.Column widescreen={8} computer={8} tablet={8} mobile={16} className="project-image" verticalAlign="middle">
              <Image style={{margin:"auto 0"}} rounded src={activeItem.image} bordered size="large" as="a" href={activeItem.liveUrl} target="_blank" />
            </Grid.Column>
            <Grid.Column widescreen={8} computer={8} tablet={8} mobile={14} className="project-info" verticalAlign='middle'>
              <Segment raised style={{minHeight:'326px'}}>
                <h2>{activeItem.title}</h2>
                <p className="description">{activeItem.description}</p>
                <div className="tag-container">
                  {activeItem.tools.map((tool, i) => (
                    <span className="tags" key={tool[i]}>{tool}</span>
                  ))}
                </div>
                <div className="links">
                  <Button animated inverted color='violet' as='a' href={activeItem.liveUrl} target='_blank'>
                    <Button.Content visible>Live Site</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
                  </Button>
                  {activeItem.gitUrl !== "null" && (
                  <Button animated inverted color='purple' as='a' href={activeItem.gitUrl} target='_blank'>
          
                    <Button.Content visible>Github Repository</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
                  </Button>
                  )}
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>    
    );
  }
}
                  
