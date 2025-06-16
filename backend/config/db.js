import mongoose from "mongoose";
const MongoURI=process.env.MONGO_URL;
export const  connectDB = async () =>{

    await mongoose.connect(MongoURI).then(()=>console.log("DB Connected"));
   
}
