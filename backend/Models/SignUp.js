import mongoose from "mongoose"

const SignUpSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true  
    },
    email: {
        type: String,
        require: true,
        unique: true        
    },
    password: {
        type: String,
        require: true,
    },
});

const SignUp = mongoose.model("Signup", SignUpSchema)
export {SignUp as User}