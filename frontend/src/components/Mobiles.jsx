// import React from 'react'
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/CartSlice"
import { addToWishList } from "../features/CartSlice"
import { buyNow } from "../features/CartSlice"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"
import NavBar from "./NavBar"
import axios from "axios"

const Mobiles = () => {
  const data = [
    {
      id: 201,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZO/MC/KM/93370416/new-apple-iphone-11-64gb-purple-500x500.jpg" alt="" />,
      name: 'Iphone 11',
      price: 39999,
      quantity: 1
    },
    {
      id: 202,
      img1: <img src="https://m.media-amazon.com/images/I/71umuN8XVeL.jpg" alt="" />,
      name: 'Iphone 12 Pro Max',
      price: 49229,
      quantity: 1
    },
    {
      id: 203,
      img1: <img src="https://www.reliancedigital.in/medias/Apple-iPhone-15-Plus-128-GB-Blue-493839327-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzOTU3MTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDBiL2hjNC8xMDA1MTgzMjA1Mzc5MC5qcGd8YzUzNDFlMzQ2ZjdkZDQ1NDMxN2RjNDM1YTVjOGYxMWNiYTc3ZDYwOWUzMTIxNGQ5ZGEyNTk1MTYxMjEzMGZhNA" alt="" />,
      name: 'Iphone 15 Plus',
      price: 65969,
      quantity: 1
    },
    {
      id: 204,
      img1: <img src="https://www.clevercel.co/cdn/shop/files/iPhone-14-Pro_Space-black_Black-side_1200x.jpg?v=1712350436" alt="" />,
      name: 'Apple 14',
      price: 55299,
      quantity: 1
    },
    {
      id: 205,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/356127293/DS/BA/WQ/126530580/samsung-galaxy-s23-ultra-5g-cream-12gb-256gb-storage-99999.jpg" alt="" />,
      name: 'Samsung Galaxy S23',
      price: 69449,
      quantity: 1
    },
    {
      id: 206,
      img1: <img src="https://i.ebayimg.com/images/g/3R8AAOSwTaJi6Qyn/s-l1200.jpg" alt="" />,
      name: 'Samsung Z Flip',
      price: 79199,
      quantity: 1
    },
    {
      id: 207,
      img1: <img src="https://i.ebayimg.com/images/g/7fUAAOSwpBVjW0Qr/s-l1200.webp" alt="" />,
      name: 'Red Mi Note 12 Pro',
      price: 12690,
      quantity: 1
    },
    {
      id: 208,
      img1: <img src="https://m.media-amazon.com/images/I/81E8SogqwjL.jpg" alt=""  />,
      name: 'samsung s22 ultra',
      price: 51799,
      quantity: 1
    }
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [filterData, setFilterData] = useState([])
  const [mobileData, setMobileData] = useState([])
  // const [mobile, setMobile] = useState([])
  // const navigate = useNavigate()
  const handleLowFilter = () => {
    const lowFilter = data.filter((item) => {
      return item.price <= 20000
    })

    setFilterData(lowFilter)
  }
  const handleMediumFilter = () => {
    const mediumFilter = data.filter((item) => {
      return item.price > 20000 && item.price < 60000
    })
    setFilterData(mediumFilter)
  }
  const handleHighFilter = () => {
    const highFilter = data.filter((item) => {
      return item.price > 60000 && item.price < 80000
    })
    setFilterData(highFilter)
  }

  const handleBuyNow = () => {
    navigate("/BuyNow")
  }

  // const handleLogout = () => {
  //   axios.get('http://localhost:9090/auth/logout')
  //     .then(res => {
  //       if (res.data.status) {
  //         navigate("/Login")
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }

  const fetchMobileData = async () => {
    try {
      const response = await axios.get("http://localhost:9090/auth/getmobiles")
      setMobileData(response.data)
    } catch (error) {
      console.log('Error during fetching data :', error)
    }
  }

  useEffect(() => {
    fetchMobileData()
  }, [mobileData])


  return (
    <>
      <NavBar />
      <div className="f2">
        <button onClick={() => handleLowFilter()} className="filter  btn-f btn-r">Price 999 - 20000</button>
        <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 20000 - 60000</button>
        <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 60000 - 80000</button>
        <h3 className='veg-h f1'>Mobiles : </h3>
        <ul className='veg'>
          {data.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '420px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}

                <div className="card-body">
                  <h6 className="card-title card-data">{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button onClick={() => dispatch(buyNow(f)) && handleBuyNow()} type="button" className="mobileBuyNowBtn">Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>

      <div className="f2">
        {/* <h3 className="veg-h f1">Filter Data : {filterData.length}</h3> */}
        <ul className='veg'>
          {mobileData.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                <img src={f.img} alt="Error" width={'288px'} height={'270px'} />

                <div className="card-body">
                  <h6 className="card-title card-data">{f.productName} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn">Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>

      <div className="f2">
        <h3 className="veg-h f1">Filter Data : {filterData.length}</h3>
        <ul className='veg'>
          {filterData.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}

                <div className="card-body">
                  <h6 className="card-title card-data">{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn">Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Mobiles