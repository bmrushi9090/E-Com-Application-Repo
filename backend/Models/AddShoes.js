import mongoose from "mongoose";

const AddShoesSchema = new mongoose.Schema({
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

const AddShoes = mongoose.model('AddShoes', AddShoesSchema)
export { AddShoes as SellerShoes }