import React, { Component } from "react";
import {
  Grid,
  Menu,
  Segment,
  Image,
  Divider,
} from "semantic-ui-react";
import './style.css';

const projectList = [
  {
    id: 1,
    name: "breaking news search",
    title: "Breaking News Search",
    description:
      "This is React app that returns API news results after form submit. Includes pagination to load more results.",
    image: "./assets/images/breaking-news-app.png",
    url: "https://mtzfox.github.io/breaking-news-app/",
    slug: "breaking-news-search",
    tools: ["React", "CSS", "Vite.js", "semantic UI", "async/await fetch", "rapid API"]
  },
  {
    id: 2,
    name: "crypto coin list",
    title: "Crypto Tracker",
    description:
      "This is a simple web app for displaying current information about top crypto coins.",
    image: "./assets/images/crypto-app.png",
    url: "https://mtzfox.github.io/crypto-coin-app/",
    slug: "crypto-coin-list",
    tools: ["Vite", "Pico.css", "SCSS", "Axios", "Coinstats API"]
  },
  {
    id: 3,
    name: "star rating widget",
    title: "Star Rating Widget",
    description:
      "This is a widget for selecting a star rating, with added form for submitting a review.",
    image: "./assets/images/star-rating-widget.png",
    url: "https://codesandbox.io/s/star-rating-widget-n6vjuk",
    slug: "star-rating-widget",
    tools: ["Vanilla JavaScript", "CSS", "HTML", "Font Awesome"]
  }
];

// const projectList = [
//   {
//     id: 1,
//     name: "breaking news search",
//     title: "Breaking News Search",
//     description:
//       "This is React app that returns API news results after form submit. Includes pagination to load more results.",
//     image: "./assets/images/breaking-news-app.png",
//     url: "https://mtzfox.github.io/breaking-news-app/",
//     slug: "breaking-news-search",
//     tools: ["React", "CSS", "Vite.js", "semantic UI", "async/await fetch", "rapid API"]
//   },
//   {
//     id: 2,
//     name: "crypto coin list",
//     title: "Crypto Tracker",
//     description:
//       "This is a simple web app for displaying current information about top crypto coins.",
//     image: "./assets/images/crypto-app.png",
//     url: "https://mtzfox.github.io/crypto-coin-app/",
//     slug: "crypto-coin-list",
//     tools: ["Vite", "Pico.css", "SCSS", "Axios", "Coinstats API"]
//   },
//   {
//     id: 3,
//     name: "star rating widget",
//     title: "Star Rating Widget",
//     description:
//       "This is a widget for selecting a star rating, with added form for submitting a review.",
//     image: "./assets/images/star-rating-widget.png",
//     url: "https://codesandbox.io/s/star-rating-widget-n6vjuk",
//     slug: "star-rating-widget",
//     tools: ["Vanilla JavaScript", "CSS", "HTML", "Font Awesome"]
//   }
// ];




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
            {/* <Grid.Row style={{padding:"2em 2em"}}>
              <Grid.Column width={12}>
                <Header as="h2">{activeItem.title}</Header>
              </Grid.Column>
            </Grid.Row> */}
            
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
                  
