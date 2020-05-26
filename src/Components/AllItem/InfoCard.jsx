import React, { Component } from 'react';
import {Divider, Header, Icon} from 'semantic-ui-react'

class InfoCard extends Component {

  render() {

    let {name, color, size, description, designer, price} = this.props.item
    return (
      <Divider className="info">
        <p className="infoo">
      <h4>{name}</h4>
      <p>${price}</p>
      <h4>color:</h4>
      <p>{color}</p>
      <h4>Description:</h4><br/>
      <p className="desc">{description}</p>
      </p>

      </Divider>
    );
  }

}

export default InfoCard;