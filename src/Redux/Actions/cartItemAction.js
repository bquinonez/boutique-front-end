  
export const addToCart = (item) =>{
    return {
      type: "ADD_ITEM",
      payload: item
    }
   }
   
   export const deleteFromCart = (id)=>{
     // console.log(id);
     return {
       type: "REMOVE_ITEM",
       payload: id
     }
   }
   
   export const emptyCartItem = () =>{
     return {
       type: "EMPTY_CART",
     }
   }
   
   export const sortItems = (term) =>{
     return {
       type: "SORT_ITEMS",
       payload: term
     }
   }