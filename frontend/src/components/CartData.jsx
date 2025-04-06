// import React from 'react'
import { useEffect } from "react"
import Footer from "./Footer"

import { useSelector, useDispatch } from "react-redux"
import { removeCart, getCartTotal, decreaseDataQuantity, increaseDataQuantity } from '../features/CartSlice'
import NavBar from "./NavBar"

const CartData = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <>
        <NavBar/>
            <div className="f2">
                <h3 className="veg-h f1">Selected Cart Item : {cart.length}</h3>
                <div className="veg-h f1 cartTotal">
                    <p>Total Quantity : {totalQuantity}</p>
                    <p>Total Cart Price : ₹ {totalPrice}</p>
                </div>
                    <ul className="selected-cart-item f2" >
                        {cart.map((item, index) => (
                            <li key={index}>
                                <div className="card cart-m" style={{ width: '18rem ', height: '430px' }} >
                                    {item.img1 || <img src={item.img} width={'288px'} height={'250px'} />}
                                    
                                    {/* <div> */}
                                    <div className="card-body">
                                        <p>{item.name || item.productName} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => dispatch(removeCart(item.id))} className="bi bi-trash3-fill wish-delete" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg></p>
                                        <p>₹ {item.price}</p>

                                        <button className='reduceItem' onClick={() => dispatch(decreaseDataQuantity(item.id))}  >-</button> {item.quantity} <button className='IncreaseItem' onClick={() => dispatch(increaseDataQuantity(item.id))} >+</button>
                                        {/* <button onClick={() => dispatch(removeCart(item.id))} type="button" className="btn btn-danger">Remove From Cart</button> */}
                                        <button type="button" className="CartBuyNowBtn">Buy Now</button>
                                    </div>
                                </div>
                            </li>

                        ))}
                    </ul>
            </div>
            <Footer/>
        </>
    )
}

export default CartData