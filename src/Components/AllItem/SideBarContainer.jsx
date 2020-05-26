import React, { Component } from 'react';
import {Icon, Input, Menu, Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {sortItems} from '../../Redux/Actions/cartItemAction'

class SideBarContainer extends Component {
  state = { activeItem: 'color' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleAll=(evt, {name})=>{
    let term = name === "color" ? evt.target['innerText'] : evt.target.getAttribute("term")
    this.props.sortItems(term)
    this.handleItemClick(evt, name)
  }

  getColorOptions=()=>{
    let colorArray = ["Red", "Blue", "Black", "Purple", "Orange", "Grey", "Yellow", "Pink", "Green"]
    let tagOptions =  colorArray.map(color => {
      return {
        key: color,
        text: color,
        value: color,
        label: { color: color.toLowerCase(), empty: true, circular: true },
      }
    })
    return tagOptions
  }

  getMenuItems=()=>{
   const { activeItem } = this.state
   let termArray = ["All","Tunic", "Dress", "Wedding", "Jumpsuit", "Bottom", "Top" ]
   let menuItems = termArray.map(term => {
     return (
       <Menu.Item
         term={term.toLowerCase()}
         name= {term}
         active={activeItem === term}
         onClick={this.handleAll}
       />
     )
   })
   return menuItems
  }


  render() {
      const { activeItem } = this.state
      return (
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
         <Menu.Item
           term="HighToLow"
           name='price: Highest to Lowest'
           active={activeItem === 'price: Highest to Lowest'}
           onClick={this.handleAll}
         />
         <Menu.Item
           term="LowToHigh"
           name='price: Lowest to Highest'
           active={activeItem === 'price: Lowest to Highest'}
           onClick={this.handleAll}
         />

         <Dropdown text='Color' multiple icon='filter'>
         <Dropdown.Menu>
           <Dropdown.Menu scrolling>
             {this.getColorOptions().map((option) => (
               <Dropdown.Item onClick={this.handleAll} key={option.value} {...option}  name="color"  />
             ))}
           </Dropdown.Menu>
         </Dropdown.Menu>
         </Dropdown>

       <Menu.Item header>Category</Menu.Item>
       {this.getMenuItems()}
      </Menu>
    );
  }

}



export default connect(null, {sortItems})(SideBarContainer);



// <Menu.Item
//   name='color'
//   active={activeItem === 'color'}
//   onClick={this.filterColor}
// />