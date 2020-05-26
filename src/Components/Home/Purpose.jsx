  
import React, { Component } from 'react';
import { Segment, Image, Divider } from 'semantic-ui-react'
import wed1 from './images/wed1.jpg'
import wed2 from './images/wed3.jpg'




class Purpose extends Component {

  render() {
    // const src = 'https://react.semantic-ui.com/images/wireframe/image-text.png'
    return (
      <div className ="look">
        <section>
          <p className="book">Behind The Brand</p>
          <p className="book"> <stong>Flouresce:</stong> a glow that is emitted from a source that has absorbed light. <br></br> Be the energy you wish to attract. </p>
            <Image src={wed1} size='xlarge' centered />
          {/* <p className="book">
            As a brand, we aspire to illuminate the natural glow instilled deep within you:
            <br></br>
            You are the Canvas and we are the Accessory.
          </p> */}
        </section>

        <section>
            <p className="book">
              Allow us to highlight your Beauty! 
            </p>
        </section>
        <p className="book">
          <br></br>
          Dive deeper into our mission:
          <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-nykt0fZey8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>
          {/* <Image src={wed2} size='large'/> */}
      </div>
    );
  }

}

export default Purpose;
