import { createSlice } from '@reduxjs/toolkit'
// import cart from '../components/CartData'
// import Carts from '../components/Carts'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        wishData: [],
        buyNow: [],
        // items :Carts ,
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {

        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            find >= 0 ? state.cart[find].quantity += 1 : state.cart.push(action.payload)
        },

        buyNow: (state, action) => {
            let find = state.buyNow.findIndex((item) => item.id === action.payload.id)
            find >= 0 ? state.buyNow[find].quantity += 1 : state.buyNow.push(action.payload)
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((data) => data.id !== action.payload)
        },

        addToWishList: (state, action) => {
            let find = state.wishData.findIndex((data) => data.id === action.payload.id)
            find >= 0 ? alert("Data Already In Wish List") : state.wishData.push(action.payload)
        },

        removeWishItem: (state, action) => {
            state.wishData = state.wishData.filter((data) => data.id !== action.payload)
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity
                    cartTotal.totalPrice += itemTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },


        increaseDataQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },

        decreaseDataQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
        },
    }
})

export const { addToCart, buyNow, removeCart, addToWishList, removeWishItem, getCartTotal, increaseDataQuantity, decreaseDataQuantity,  } = CartSlice.actions

export default CartSlice.reducer