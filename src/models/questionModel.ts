import * as mongoose from 'mongoose';

const modelName = 'question'

interface Question {
    title:string ,
    keywords:[Object],
    content:string ,
    postedBy:mongoose.Types.ObjectId,
    skillsId:mongoose.Types.ObjectId[]
}


const questionSchema = new mongoose.Schema({
    title:{type:String , required: true},
    keywords:[Object],
    content:{type:String , required:true},
    postedBy:{type:mongoose.Types.ObjectId, ref:'users',required:true},
    skillsId:{type:[mongoose.Types.ObjectId]}

})

export default mongoose.model<Question>(modelName, questionSchema);