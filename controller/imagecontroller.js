
import File from "../models/file.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config();
export const uploadImage= async(request,response)=>{
// console.log(request)
const fileObj = {
    path:request.file.path,
    name: request.file.originalname,
}
try {
const file= await File.create(fileObj);
console.log(file);
response.status(200).json({path:`http://localhost:${process.env.PORT}/file/${file._id}`})
} catch (error) {
    
    return response.status(500).json({error:error.message});
}


}
export  const downloadImage = async (request,response)=>{
    try {
       const file=await File.findById(request.params.fileId);
        file.downloadCount++;
        await file.save();
        response.download(file.path,file.name);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({error:error.message});
    }
}