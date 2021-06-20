import * as mongoose from 'mongoose'


const modelName = 'skills';

interface Skill {
    name:string ,
 
}
const skillSchema = new mongoose.Schema({
    name:{type:String},
})

export default mongoose.model<Skill>(modelName,skillSchema);