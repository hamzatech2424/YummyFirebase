export const AddtoCart = ( itemDetails ) => {
    
    //  console.log(itemDetails,'action say')
    
    return {
        type:"ADD_TO_CART",
        payload:itemDetails
    }
}



export const DeleteFromCart = ( itemId ) => {
    return {
        type:'REMOVE_FROM_CART',
        payload:itemId
    }
}



export const IncreaseIteminCart = (itemId,countValue) =>{

    return {
        type:'INCREASE',
        payload:{
            itemId,
            countValue
        }
    }
}



export const DecreaseIteminCart = (itemId,countValue) =>{

    return {
        type:'DECREASE',
        payload:{
            itemId,
            countValue
        }
    }
}





