import {combineReducers} from "redux"
import {cartReducer} from "./productReducer"



export const rootReducer = combineReducers({
    productsAll:cartReducer
})