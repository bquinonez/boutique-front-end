export const saveUserToState = (user) =>{
    return {
        type: "SAVE_USER",
        payload: user
    }
}
   
export const saveErrorToState = (error)=>{
    return {
        type: "SAVE_ERROR",
        payload: error
    }
}

export const addOrderItem = (order) =>{
    return {
        type: "ADD_ORDER",
        payload: order 
    }
}