// import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const AddElectronics = () => {
    const [img, setImg] = useState()
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    // const [addData, setAddData] = useState([])

    const handleAddData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9090/auth/addelectronics', {
            img: img,
            productName: productName,
            price: price,
            quantity: quantity
        })
        alert("Add Product Sucessfully...!")
    }
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
                                <Link className="nav-link nav-name" to="/DisplayMobiles">Mobile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayElectronics">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayShoes">Shoes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="UserF f2">
                <strong>Image URL :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Enter Image URL..' onChange={(e) => { setImg(e.target.value) }} /> <br />
                <strong>Product Name :</strong> <br /><input required className='uinput f2' type="text" placeholder='Enter Product Name..' onChange={(e) => { setProductName(e.target.value) }} /><br></br>
                <strong>Price :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Enter Price..' onChange={(e) => { setPrice(e.target.value) }} /> <br></br>
                <strong>Quantity :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Quantity Should be 1...' onChange={(e) => { setQuantity(e.target.value) }} /> <br />
                <button type='button' className='seller-btn f2' onClick={handleAddData}>Add Electronics</button>
            </div>
    </>
  )
}

export default AddElectronics