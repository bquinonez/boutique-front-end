import React, { Component } from 'react';
import ImgCard from './ImgCard'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
import {sortItems} from '../../Redux/Actions/cartItemAction'


class ImgContainer extends Component {
  filterByCategory = (term)=>{
    return this.props.items.filter( item => item.category_name === term).map(item =>
      <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
  }

  sortByPrice=(term)=>{
    return this.props.items.sort((itemA, itemB ) =>
     term === "HighToLow" ? (itemB.price - itemA.price) : (itemA.price - itemB.price)).map(item =>
      <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
  }

  filterItems =()=>{
    let filterCategories = ["jumpsuit", "dress", "tunic", "bottom", "wedding", "top"]
    let colorCategories = ["Red", "Blue", "Black", "Purple", "Orange", "Grey", "Yellow", "Pink", "Green", "Brown", "Clear", "White"]
    let priceCategories = ["HighToLow", "LowToHigh"]
    let {name, id, color} = this.props.items
    let term = this.props.term.term

    if (priceCategories.includes(term)){
      return this.sortByPrice(term)
    } else if (filterCategories.includes(term)){
      return this.filterByCategory(term)
    }  else if (colorCategories.includes(term) ){
      let imgCards = this.props.items.filter( item => item.color.toLowerCase() === term.toLowerCase()).map(item =>
        <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
        return  imgCards
    }  else {
        let imgCards= this.props.items.map(item =>
          <Link key={item.id} to={`/item/${item.id}`}><ImgCard cardType="all-item" item={item}/></Link>)
        return  imgCards
    }
  }

  render() {
    return (
        <Card.Group itemsPerRow={6}>{this.filterItems()}</Card.Group>
    );
  }
}

const mapStateToProps = (state) => {
// console.log(state.term);
  return {
    items: state.items,
    term: state.term
  }
}

export default connect(mapStateToProps, {sortItems})(ImgContainer);