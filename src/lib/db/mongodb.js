import mongoose from "mongoose";

const connectMongoDB=async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_STRING);
        // console.log("Connected to db");
    }catch(error){
console.log(error);
    }
}

export default connectMongoDB;