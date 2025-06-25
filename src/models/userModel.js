import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        type: 'any',
        default: ''
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;