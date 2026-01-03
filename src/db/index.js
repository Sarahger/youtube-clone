import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


async function connectToMongoDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connected to MongoDB | HOST:", connectionInstance.connection.host);
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

export default connectToMongoDB;