// import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import { useParams, useNavigate } from 'react-router-dom';

const EditShoes = () => {
    const [img, setImg] = useState()
    const [productName, setProductName] = useState()
    const [price, setPrice] = useState('')
    // const [quantity, setQuantity] = useState('')
    // const [addData, setAddData] = useState([])

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9090/auth/getshoes/${id}`)
            .then(res => {
                setImg(res.data.img);
                setProductName(res.data.productName);
                setPrice(res.data.price);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedData = { img, productName, price };

        axios.put(`http://localhost:9090/auth/updateshoes/${id}`, updatedData)
            .then(res => {
                console.log(res.data);
                navigate('/DisplayShoes');
            })
            .catch(err => console.log(err));
    };

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
                <strong>Image URL :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Enter Image URL..' value={img} onChange={(e) => { setImg(e.target.value) }} /> <br />
                <strong>Product Name :</strong> <br /><input required className='uinput f2' type="text" placeholder='Enter Product Name..' value={productName} onChange={(e) => { setProductName(e.target.value) }} /><br></br>
                <strong>Price :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Enter Price..' onChange={(e) => { setPrice(e.target.value) }} value={price} /> <br></br>
                {/* <strong>Quantity :</strong> <br /> <input required className='uinput f2' type="text" placeholder='Quantity Should be 1...' onChange={(e) => { setQuantity(e.target.value) }} /> <br /> */}
                <button type='button' className='seller-btn f2' onClick={handleUpdate}>Update Shoes</button>
            </div>
        </>
    )
}

export default EditShoes