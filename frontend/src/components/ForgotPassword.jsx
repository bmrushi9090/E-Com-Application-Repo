// import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import NavBar from "./NavBar"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true
    const handleForgotPassword = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9090/auth/forgot-password',
            {
                email
            })
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    alert("Check your email")
                    navigate("/Login")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        <NavBar/>
            <h1 className="veg-h mr f1">Reset Password</h1>
            <form className="f2 login-form forgot-password" method="POST" onSubmit={handleForgotPassword} autoComplete="off" >
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="password" autoComplete="false" className="form-control brd pass-len" required />
                </div>
                <Link to="/Login" type="submit" className="btn btn-login">Login</Link>
                <button type="submit" className="btn btn-reset">Reset</button><br /><br />
            </form>
        </>
    )
}

export default ForgotPassword