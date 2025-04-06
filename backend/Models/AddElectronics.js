import mongoose from "mongoose";

const AddElectronicsSchema = new mongoose.Schema({
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

const AddElectronics = mongoose.model('AddElectronics' , AddElectronicsSchema)
export {AddElectronics as SellerElectronics}