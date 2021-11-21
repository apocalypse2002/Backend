const mongoose=require('mongoose');
const {Schema}=mongoose;
const student=new Schema(
{
Name: String,
Registration_number: Number,
Marks: Number
});
module.exports=mongoose.model("Students",student,"STUDENT_Marks");