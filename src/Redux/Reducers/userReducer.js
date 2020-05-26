const initialUserState = {
    user: {cart: {cart_items: []}},
    token: "",
    error: "",
}

const userReducer = (state = initialUserState, action) =>{
    // debugger
    // console.log(state);
    switch (action.type) {
  
    case  "SAVE_USER":
    //state.concat(action.items)
    return {...state, ...action.payload}
    
    case "SAVE_ERROR":
    return {...state, error: action.payload}
    
    case 'ADD_ITEM':
    // debugger
    let itemIdx =  state.user.cart.cart_items ? state.user.cart.cart_items.findIndex(ct => ct.item_id === action.payload.item_id) : -1
    if (itemIdx < 0) {
        return {...state, user: {
            ...state.user,
            cart: {...state.user.cart,
            cart_items: [...state.user.cart.cart_items, action.payload]}
        }   
        }
        } else {
          return {...state, user: {
            ...state.user,
            cart: {...state.user.cart,
              cart_items: [...state.user.cart.cart_items.slice(0, itemIdx), action.payload, ...state.user.cart.cart_items.slice(itemIdx + 1)]}
            }
          }
        }
  
      case 'REMOVE_ITEM':
        let filteredCart = state.user.cart.cart_items.filter(cartItem => cartItem.id !== action.payload)
         // console.log(filteredCart);
        return {...state, user: {...state.user,
           cart: {...state.user.cart,
             cart_items: [...filteredCart]}}
        }
          //adding order to the order items
      case "ADD_ORDER" :
        return {...state, user: {
            ...state.user,
            orders: [...state.user.orders, action.payload]
          }
        }
      case "EMPTY_CART":
        return {...state, user: {
              ...state.user,
              cart: {...state.user.cart, cart_items: []}
            }
          }
      case "ADD_REVIEW" :
        return{
          ...state, user:{
            ...state.user,
            reviews:[...state.user.reviews, action.payload]
          }
        }
  
  
  
  
        default:
        return state
    }
}

  export default userReducer;
  
  // here i am going to access the user cart key and then filter by the id
  // in order to remove it from the cart