const initialState = {
    cart: [],
}


const CartReducer = (state = initialState, action) => {


    switch (action.type) {

        case "ADD_TO_CART":
          
        // console.log(action.payload,'addtocart')


                // //get the items data from products array
                // const item = state.cart.find(prod => prod.id == action.payload.id)

                // // console.log(item, 'selected')


                //  //check if the item in the card already
                // const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
                // //  console.log(inCart,"Chal rha hai")
    
                // return {
                //     ...state,
                //     cart: inCart
                //         ?
                //         state.cart.map((item) =>
                //             item.id == action.payload.id
                //                 ?
                //                 { ...item, count: item.count + 1 }
    
                //                 : item
                //         )
                //         :
                //         [...state.cart, { ...action.payload, count: 1 }]
    
                // }


        case "REMOVE_FROM_CART" :
            
        return {
            ...state,
            cart:state.cart.filter((entry)=> entry.id !== action.payload )
        }

          
        case "INCREASE" : 

        return {
            ...state,
            cart: state.cart.map(item => item.id == action.payload.itemId ? { ...item, count: ++action.payload.countValue } : item)
        }
   

        case "DECREASE" : 

        return {
            ...state,
            cart: state.cart.map(item => item.id == action.payload.itemId ? { ...item, count: --action.payload.countValue } : item)
        }




        default: return state;

    }
}


export default CartReducer