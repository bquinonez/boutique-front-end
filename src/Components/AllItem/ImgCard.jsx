import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'
import {Slider, Slide } from "pure-react-carousel";


class ImgCard extends Component {

  allItemImage =(image, price, name, designer)=>{
    return <Card className="all-item">
      <Image src={image} alt="default image" wrapped ui={false}/>
      <Card.Content extra>
          <p>{name}</p>
          {/* <p>by {designer}</p> */}
          <b>${price}</b>
      </Card.Content>
  </Card>
  }

  showItemImage =(image)=>{
    return <Image className="show-image" src={image} alt="show image" wrapped ui={false}/>
  }

  homeItemImage =(image)=>{
    return  <Image src={image} />
  }

  finaleImageCard =(image, price, name, designer)=>{
    if (this.props.cardType === "show-container"){
      return this.showItemImage(image)
    } else if(this.props.cardType === "home-img") {
      return this.homeItemImage(image)
    } else {
      return this.allItemImage(image, price, name, designer)
    }
  }



  render() {
    let {image, price, name, designer} = this.props.item
    // console.log(this.props.item);
    return (
      <>
      {this.finaleImageCard(image, price, name, designer)}
      </>
    );
  }
}
export default ImgCard;