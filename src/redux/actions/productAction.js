import { ActionType } from "./constType";



export const addProduct = (product) =>{
    return {
        type:ActionType.ADD_PRODUCT,
        payload:product
    }
}


export const deleteProduct = (product) =>{
    return {
        type:ActionType.DELETE_PRODUCT,
        payload:product
    }
}

export const numberInc = (product) =>{
    return {
        type:ActionType.INCREMENT,
        payload:product
     }
}

export const numberDec = (product)=>{
    return {
        type:ActionType.DECREMENT,
        payload:product
    }
}