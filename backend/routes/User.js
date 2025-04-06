import express from "express"
import bcrypt from "bcrypt"
import { User } from "../Models/SignUp.js"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { SellerMobiles } from "../Models/AddMobiles.js"
import { SellerElectronics } from "../Models/AddElectronics.js"
import { SellerShoes } from "../Models/AddShoes.js"
const KEY = "jwttokenkey"
const router = express.Router()

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        return res.json("user already exist")
    } else {
        const hashpassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashpassword
        })

        await newUser.save()
        return res.json("signup")
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        return res.json("User not register")
    } else {
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.json("Incorrect Password")
        }

        const token = jwt.sign({ name: user.name }, KEY, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
        return res.json({ status: true, message: "Login Successfully" })
    }
})

router.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ message: "Usr Not Register" })
        } else {

            const token = jwt.sign({ id: user._id }, KEY, { expiresIn: "5m" })

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rushikeshshelke0009@gmail.com',
                    pass: '9090'
                }
            });

            var mailOptions = {
                from: 'rushikeshshelke0009@gmail.com',
                to: email,
                subject: 'Reset Password',
                text: `http://localhost:5173/reset-password/${token}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.json({ message: "error sending email" })
                } else {
                    return res.json({ status: true, message: "email sent" })
                }
            });

        }

    } catch (err) {
        console.log(err)
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ status: true })
})

router.post('/addmobiles', (req, res) => {
    SellerMobiles.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})


router.get('/getmobiles', (req, res) => {
    SellerMobiles.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

router.delete('/deletemobiles/:id', async (req, res) => {
    try {
        const data = await SellerMobiles.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ msg: 'Item deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/addelectronics', (req, res) => {
    SellerElectronics.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})


router.get('/getelectronics', (req, res) => {
    SellerElectronics.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

router.post('/addshoes', (req, res) => {
    SellerShoes.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})


router.get('/getshoes', (req, res) => {
    SellerShoes.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

router.put('/updateshoes/:id', (req, res) => {
    SellerShoes.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(item => res.json(item))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
});

router.delete('/deleteshoes/:id', async (req, res) => {
    const data = await SellerShoes.findByIdAndDelete(req.params.id)
        .then(res => res.json(res))
        .catch(err => {
            res.json(err)
        })
})

export { router as UserRouter }