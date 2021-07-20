import * as mongoose from 'mongoose';

const modelName = 'article'

interface Article {
    title:string ,
    keywords:[Object],
    content:string ,
    postedBy:mongoose.Types.ObjectId
}


const articleSchema = new mongoose.Schema({
    title:{type:String , required: true},
    keywords:[Object],
    content:{type:String , required:true},
    postedBy:{type:mongoose.Types.ObjectId, ref:'users',required:true},
})

export default mongoose.model<Article>(modelName, articleSchema);