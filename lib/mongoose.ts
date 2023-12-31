import mongoose from "mongoose";


let isConnected : boolean = false
export const connectToDatabase=async ()=>{
    mongoose.set("strictQuery",true);
    if(!process.env.MANGODB_URL) return console.log("MISSING MANGODB_URL");
    if(isConnected){
        console.log("=> using existing database connection");
        return Promise.resolve();
    }
    try {
        await mongoose.connect(process.env.MANGODB_URL,{
            dbName: "devflow",
        })
        isConnected=true;
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("MongoDB connection failed",error);
        return Promise.reject(error);
    }
    
}