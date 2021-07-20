import * as mongoose from 'mongoose';

const modelName = 'followrequest'

enum Status{
    PENDING=0,
    ACCEPT=1,
    REJECT=2
}
interface FollowRequest {
    sendBy:mongoose.Types.ObjectId ,
     status:Status,
    sendTo:mongoose.Types.ObjectId
}


const followRequestSchema = new mongoose.Schema({
    status:{type:Number , enum:Status},
    sendTo:{type:mongoose.Types.ObjectId, ref:'users',required:true},
    sendBy:{type:mongoose.Types.ObjectId, ref:'users',required:true},
})

export default mongoose.model<FollowRequest>(modelName, followRequestSchema);