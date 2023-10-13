const express=require("express");
const app=express();
const dotenv=require("dotenv");
const cors=require("cors");
const path=require("path");
dotenv.config();
app.use(cors());
app.use(express.json())
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/blog_app",{
    useNewUrlParser:true,useUnifiedTopology:true
},).then(()=>console.log(`mongodb connnection is successful`)).catch((err)=>console.log(err))
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);


app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(req,res){
 res.sendFile(path.join(__dirname,"./client/build/index.html"))
});



const PORT=process.env.PORT||8081

app.listen(PORT,()=>console.log(`running on ${PORT}`))