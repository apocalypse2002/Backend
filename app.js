const express=require("express");
const app=express();
const mongoose = require('mongoose');
const
url="mongodb+srv://apocalypse:9381793226@cluster0.jyeof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const stu=require("./schema");
mongoose.connect(url).then(()=>console.log("Conected to DB"));
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
const name=req.body.Name;
const Rnumber=req.body.Registration_number;
const sub_marks=req.body.Marks;
try
{
const st=new stu(
{
Name:name,
Registration_number:Rnumber,
Marks:sub_marks
}
)
const savedst=await st.save()
res.json(
{"message":"Student marks are saved","data":savedst}
)
}
catch(err)
{
res.json(err);
}
})
app.use("/",(req,res)=>{
res.send("rajesh")
res.json({
})
}
)
app.listen(3000,()=>console.log("Express Started"))