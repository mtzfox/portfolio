import React, { Component } from "react";
import {
  Grid,
  Menu,
  Segment,
  Image,
  Divider,
} from "semantic-ui-react";
import './style.css';
import projectList from './projectsList';

export default class ProjectList extends Component {
  state = { activeItem: projectList[0] };

  handleItemClick = (e, { item }) => this.setState({ activeItem: item });

  render() {
    const { activeItem } = this.state;

    return (
    <>
      <Segment inverted attached="bottom" mobile={14}>
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

              <Menu style={{fontSize: "1.3rem"}} inverted attached top tabular pointing secondary fluid widths={(projectList.length) + 1} padded stackable>

                  
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
          <Grid.Row style={{padding:"2em 0 0"}}>
            
            <Grid.Column computer={6} tablet={4} mobile={16} style={{margin:"0px auto", padding: "0em 2em 1em", textAlign:"center"}} verticalAlign="middle">
              <Image style={{margin:"auto 0"}} rounded src={activeItem.image} bordered size="medium" verticalAlign="middle" as="a" href={activeItem.url} target="_blank" />
            </Grid.Column>
            <Grid.Column computer={10} tablet={10} mobile={14} verticalAlign='middle' style={{margin:"0px auto", padding: "0em 1em 1em 0"}}>
              <Segment raised >
                <p>{activeItem.description}</p>
                <ul>
                  {activeItem.tools.map((tool, i) => (
                    <li key={tool[i]}>{tool}</li>
                  ))}
                </ul>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>    
    );
  }
}
                  
