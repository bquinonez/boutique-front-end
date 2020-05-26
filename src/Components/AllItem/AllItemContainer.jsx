import React, { Component } from 'react';
import ImgContainer from './ImgContainer'
import SideBarContainer from './SideBarContainer'

class AllItemContainer extends Component {
  render() {
    return (
      <div>
      <SideBarContainer/>
      <ImgContainer/>
      </div>
    );
  }

}

export default AllItemContainer;