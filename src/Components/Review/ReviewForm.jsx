import React, { Component } from 'react';
import {Rating} from "semantic-ui-react";

class ReviewForm extends Component {

  state = {
    comment: "",
    rating: 1
  }


  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.handleReview(this.state)
  }

  handleAllChange=(evt)=>{

    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleRate=(evt)=>{
    let rating = parseInt(evt.target.getAttribute("aria-posinset"))

    this.setState({
      rating
    })
  }

  render() {
    // console.log(this.state);
    return (
    <form className="review-form" onSubmit={this.handleSubmit}>
        <Rating className="review-r"  onRate={this.handleRate}
        icon='heart'
        defaultRating={1}
        maxRating={5} /><br/>
        <textarea
        id="rev-text"
         rows="4"
         cols="50"
         name="comment"
         value={this.state.comment}
         onChange={this.handleAllChange}
         placeholder="...Review your item here"
         />
       <br/>
       <input id="rev-sub" type="submit" value="submit"/>
     </form>
    );
  }

}

export default ReviewForm;