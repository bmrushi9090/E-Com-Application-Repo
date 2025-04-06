// import React from 'react'

import { Link } from "react-router-dom"
// import SignUp from "./SignUp"
import Footer from "./Footer"

const Home = () => {
  const mobiles = [
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
    }
  ]

  const Electronics = [
    {
      id: 105,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/QB/RA/PO/115177401/amd-ryzen-3-4350g-gaming-pc-cpu-computer-.jpg" alt="" />,
      name: 'AMD Ryzen 3 4350g',
      price: 21449,
      quantity: 1
    },
    {
      id: 102,
      img1: <img src="https://www.reliancedigital.in/medias/Haier-CBABBAM0S-Washing-Machines-491891863-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY1ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2g5ZS85MzY2MzQ0MjA0MzE4LmpwZ3wzNjUzYzNlNmU3ODNjM2YyMzRiMzlkZWMyMTU1MGE5M2EzYTc4ZjhkMDg4NjU0NDcyYTA2MjRmOTUxYTljYjNk" alt="" />,
      name: 'Haier',
      price: 15229,
      quantity: 1
    },
    {
      id: 103,
      img1: <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWW2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1681150922615" alt="" />,
      name: 'Apple Watch SE',
      price: 21969,
      quantity: 1
    },
    {
      id: 104,
      img1: <img src="https://m.media-amazon.com/images/I/41vmLEDjc2L.jpg" alt="" />,
      name: 'Redragon Gaming Mouse',
      price: 1299,
      quantity: 1
    }
  ]
  const Shoes = [
    {
      id: 301,
      img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/990b2918-fb2f-43d5-bf14-a7373d3e2a2d/court-vision-low-next-nature-shoes-Hz0K6n.png" alt="" />,
      name: 'Nike',
      price: 2349,
      quantity: 1
    },
    {
      id: 302,
      img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de5192d6-02e8-44ba-ad40-33fdb2c738e7/zoom-vomero-5-se-shoes-WWDBV1.png" alt="" />,
      name: 'Nike',
      price: 3229,
      quantity: 1
    },
    {
      id: 303,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379978/01/sv01/fnd/IND/fmt/png/Puma-Wish-Max-Men's-Running-Shoes" alt="" />,
      name: 'Puma',
      price: 2969,
      quantity: 1
    },
    {
      id: 304,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/392290/03/sv01/fnd/EEA/fmt/png" alt="" />,
      name: 'Puma',
      price: 2299,
      quantity: 1
    },
  ]
  return (
    <>
      <nav className="f1 navbar navbar-expand-lg bg-body-tertiary navB">
        <div className="container-fluid navBar">
          <Link className="navbar-brand nav-name" to="/">E-Commerce App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link nav-name" to="/SignUp">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active homepage">
            <img src="https://www.apple.com/v/iphone/buy/l/images/meta/iphone_buy__chvehwtfgamq_og.jpg?202405020914" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item homepage">
            <img src="https://static.toiimg.com/thumb/msid-106067365,width-1280,height-720,resizemode-4/106067365.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item homepage">
            <img src="https://www.apple.com/v/iphone-13/j/images/meta/iphone-13_specs__bpr60apdzuaa_og.png?202404050445" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1 className='veg-h f1 mr-top'>Mobiles : </h1>
        <ul className='veg'>
          {mobiles.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '300px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
              </div>

            </li>
          ))
          }
        </ul>
      </div>
      <div>
        <h1 className='veg-h f1 mr-top'>Electronics : </h1>
        <ul className='veg'>
          {Electronics.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '300px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
              </div>

            </li>
          ))
          }
        </ul>
      </div>
      <div>
        <h1 className='veg-h f1 mr-top'>Shoes : </h1>
        <ul className='veg'>
          {Shoes.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '300px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
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

export default Home