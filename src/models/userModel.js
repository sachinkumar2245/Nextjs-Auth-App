import mongoose from "mongoose"; //importing mongoose because it talks to my database


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },

    email:{
        type: String,
        required: [true, "Please provide email"],
        unique: true,

    },

    password: {
        type: String,
        required: [true, "Please provide a password"],
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
    
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyTokenExpiry: Date,
    }
)
//in mongoose everything is lower case and plularised;

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;