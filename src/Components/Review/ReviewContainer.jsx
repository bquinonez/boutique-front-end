import React, { Component } from 'react';
import ReviewCard from './ReviewCard'
import {Segment} from 'semantic-ui-react'

class ReviewContainer extends Component {



  render() {
    // debugger
    let reviewCard = this.props.item.reviews ?
    this.props.item.reviews.map( review => <ReviewCard review={review}/>) : null

    return (
      <Segment className="segment-review">Custom Ratings & Reviews{reviewCard}</Segment>
    );
  }

}

const mapStateToProps=(state)=>{
  console.log(state.items);
  return {
  items: state.items
  }
}

export default ReviewContainer;