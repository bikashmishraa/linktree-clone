import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    handle: {
        type: String,
        required: true,
    },
    linkText: {
        type: String,
        required: true,
    },
    linkURL: {
        type: String,
        required: true,
    },
    // pictureLink: {
    //     type: String,
    //     required: true,
    // },
});


const userModel = mongoose.models.Usersdata || mongoose.model('Usersdata', userSchema);

export default userModel