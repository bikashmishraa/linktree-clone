import mongoose from "mongoose";

const connectDB = async () => { 
    try {
        await mongoose.connect(process.env.compassMongo);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        console.log("MongoDB connection failed");
    }
};

export default connectDB