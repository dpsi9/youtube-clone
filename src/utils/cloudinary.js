import { v2 as cloudinary } from "cloudinary";
import exp from "constants";
import fs from "fs";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const Response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("Upload successful ",Response.url)
        return Response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary };

