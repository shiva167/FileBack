import mongoose from 'mongoose'
import dotenv from 'dotenv';


dotenv.config();

const DBConnection =async()=>{

   const USERNAME = process.env.DB_USERNAME;
   const PASSWORD = process.env.DB_PASSWORD;
    const DB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@sharing-file.kqclp4w.mongodb.net/`;
    try{
await mongoose.connect(DB_URL,{useNewUrlParser:true});
console.log('Database connected successfully')
    }catch(error){
        console.log('error while connecting with the database',error.message)
    }
}
export default DBConnection