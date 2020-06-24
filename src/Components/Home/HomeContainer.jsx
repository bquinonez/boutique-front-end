import React, { Component } from 'react';
import { Image, Divider, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import bdWomen from './images/pic.png'
import {Link} from 'react-router-dom'
import ImageCard from '../AllItem/ImgCard'
import {connect} from 'react-redux'
import {sortItems} from '../../Redux/Actions/cartItemAction'

class HomeContainer extends Component {

    handleHomeImage=()=>{
      this.props.history.push('/items')
    }

    handleJumpsuit=()=>{
      // this.props.sortItems("jumpsuit")
      this.props.history.push('/items')

    }

    // handleDress=()=>{
    //   this.props.sortItems("dress")
    //   this.props.history.push('/items')

    // }

  render() {
    return (
      <div>
        <Image className="home-image" onClick={this.handleHomeImage} src={bdWomen}/>
        <Divider/>
        <Header className="home-one-h1">Shop Sunnies!</Header>
      <Image.Group onClick={this.handleJumpsuit} className="sunnies-home" size='large'>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmZxYP3P2giwkg-mxjrFVTVDrQqdGJ_ke4uOdcu8ACgqvHlE3f&usqp=CAU" />
        {/* <Image src="https://www.globaldesi.in/media/catalog/product/cache/8ba85772601582a264183d0a493354f1/f/f/ff20gh001ajsrl_wine_1_.jpg" /> */}
      </Image.Group>
        {/* <Divider/>
          <Header className="home-one-h1">Shop Dress!</Header>
          <Image.Group onClick={this.handleDress} className="dress-home" size='medium'>
            <Image src="https://us.anitadongre.com/media/catalog/product/cache/9068914f3af5c89421a71a6fdd0cb779/s/s/ss19mb010-stone--_2_.jpg?v=4" />
            <Image src="https://us.anitadongre.com/media/catalog/product/cache/9068914f3af5c89421a71a6fdd0cb779/f/w/fw19mb055cf-yellow_1_.jpg" />
            <Image src="https://us.anitadongre.com/media/catalog/product/cache/8de74e620574e722f01d119e92a06058/s/s/ss19mb080-onion-pink-_1_.jpg" />


          </Image.Group> */}
      </div>
    );
  }

}

const mapStateToProps=(state)=>{
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {sortItems})(withRouter(HomeContainer));