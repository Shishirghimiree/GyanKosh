import mongoose from "mongoose";

const courseProgressSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    courseId:{type:String, required:true},
    completed:{type:Boolean, default:false},
    lectureComplected:[]
},{minimize:false});

export const CourseProgress = mongoose.model('CourseProgress',courseProgressSchema)