// import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import NavBar from "./NavBar"
import { getCartTotal } from "../features/CartSlice"

export const BuyNow = () => {
    const { buyNow } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [buyNow])
    return (
        <>
            <NavBar />
            <h3 className="veg-h f1">Your Oders : {buyNow.length}</h3>
            <div className="f2">
                <ul className='veg'>
                    {buyNow.map((f, index) => (
                        <li key={index} type='none' className='mr'>
                            <div className="card" style={{ width: '300px ', height: '430px' }} >
                                {f.img1}
                                <div className="card-body">
                                    <h6 className="card-title card-data">{f.name}</h6>
                                    <p className="card-text card-data">₹ {f.price}</p>
                                    <p className="card-text card-data"> {f.quantity}</p>
                                    <button type="button" className="CartBuyNowBtn">Buy Now</button>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>

    )
}
