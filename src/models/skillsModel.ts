import * as mongoose from 'mongoose'


const modelName = 'skills';

interface Skill {
    name:string ,
    icon:string
 
}
const skillSchema = new mongoose.Schema({
    name:{type:String, required:true},
    icon:{type:String}
})

skillSchema.path('name').validate(function(name){
return mongoose.model(modelName).count( {name, _id:{$ne:this._id}}).then((count)=>!count).catch((err)=>{throw err})

},"skill  `{VALUE}` already exists!")
export default mongoose.model<Skill>(modelName,skillSchema);