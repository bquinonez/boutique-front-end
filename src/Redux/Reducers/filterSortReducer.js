const iniState = {
    term: ""
  }
  
  const filterSortReducer = (state = iniState, action) =>{
    switch (action.type) {
      case "SORT_ITEMS":
        return {...state, term: action.payload}
  
      default:
      return state
    }
  }
  
  export default filterSortReducer;