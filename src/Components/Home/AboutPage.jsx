import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react'
import wed3 from './images/wed3.jpg'
import icon from './images/icon.png'


class AboutPage extends Component {

  render() {
    const src = 'https://react.semantic-ui.com/images/wireframe/image-text.png'
    return (
      <Segment className="about-page">
        <Image src={wed3} size='massive' centered />

        <h1 className="about-header">Our Belief</h1>
        <p>
        As a brand, we aspire to illuminate the natural glow instilled deep within you:
        <br></br>
        You are the Canvas and we are the Accessory.
        </p>

        <h1 className="about-header">Follow us:</h1>
        <a href="https://www.instagram.com/shop.fluoresce" target="_blank">
        <Image src={icon} size='small' centered />
        </a>
    
      </Segment>
    );
  }

}

export default AboutPage;