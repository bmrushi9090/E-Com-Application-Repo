import mongoose from "mongoose"

const AddMobilesScheme = new mongoose.Schema({
    img: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})

const AddMobiles = mongoose.model("AddMobiles", AddMobilesScheme)
export {AddMobiles as SellerMobiles}