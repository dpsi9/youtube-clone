import connectDB from "./db/index.js";
import app from "./app.js"


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server running on ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB failed to connect !!! ",error);
})
