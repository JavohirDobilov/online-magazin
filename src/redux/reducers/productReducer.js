import { ActionType } from "../actions/constType";

const initialState = {
    cart: []
}




export const cartReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case ActionType.ADD_PRODUCT:
            const item = action.payload
            if (state.cart.includes(item)) {
                const index = state.cart.indexOf(item)
                state.cart[index].number++
                localStorage.setItem("order", JSON.stringify(state.cart))
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                item.number++
                localStorage.setItem("order", JSON.stringify(state.cart))
                return {
                    ...state,
                    cart: [...state.cart, item]
                }
            }

        case ActionType.DELETE_PRODUCT:
            localStorage.setItem("order", JSON.stringify(state.cart))
            return {
                ...state,
                cart: [...state.cart].filter(item => item.id !== action.payload.id)
            }
        case ActionType.INCREMENT:
            const index = state.cart.indexOf(action.payload)
            state.cart[index].number++
            localStorage.setItem("order", JSON.stringify(state.cart))
            return {
                ...state,
                cart: [...state.cart]
            }

        case ActionType.DECREMENT:
            // const itemd = action.payload
            const indexs = state.cart.indexOf(action.payload)
            if (state.cart[indexs].number > 1) {
                const indexs = state.cart.indexOf(action.payload)
                state.cart[indexs].number--
                localStorage.setItem("order", JSON.stringify(state.cart))
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                localStorage.setItem("order", JSON.stringify(state.cart))
                return {
                    ...state,
                    cart: [...state.cart].filter(item => item.id !== action.payload.id)
                }
            }

        default:
            return state

    }


}