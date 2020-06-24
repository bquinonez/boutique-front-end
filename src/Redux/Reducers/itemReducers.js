
const initialItemState = []

const itemsReducer = (state = initialItemState, action) =>{
  switch (action.type) {
    case  "RENDER_ITEMS":
    //state.concat(action.items)
    return [...state, ...action.items]

    case "ADD_REVIEW":

    //item being reviewed
    let foundReviewItem = state.find(item => item.id === action.payload.item_id)
    console.log(foundReviewItem)
    console.log(foundReviewItem.id)
    let finalReviewItem ={...foundReviewItem, reviews: [...foundReviewItem.reviews, action.payload]}
     let otherItems = state.filter(item => item.id !== action.payload.item_id)
    return [...otherItems, finalReviewItem ]
    
    default:
    return state
  }
}

export default itemsReducer;