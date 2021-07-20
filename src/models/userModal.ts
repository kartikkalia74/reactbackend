import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
export interface IUser  {
    firstName :string,
    lastName :string,
    skills:[],
    hash:string,
    about:string,
    salt:string ,
    email:string,
    password?:string
    img:{type:String}
    validPassword :(password:string)=> boolean;
  }
  const modelName ='users'

  // interface Methods extends mongoose.Model<IUser>{
  //   validPassword :(password:string)=> boolean;

  // }

const  userSchema = new  mongoose.Schema<IUser>({
    firstName :{type:String , required:true},
    lastName :{type:String,  required:true},
    skills:{type:[mongoose.Types.ObjectId] ,ref:'skills'},
    hash:{type:String ,select:false},
    salt:{type:String , select:false},
    email:{type:String,  required:true},
    authToken:{type:String},
    password:{type:String},
    about:{type:String},
    img:{type:String}
},{timestamps:true }) 

userSchema.path('email').validate(function(email){
return mongoose.model(modelName).count({email, _id:{$ne:this._id}}).then((count)=>!count).catch((err)=>{throw err})
},"user with `{VALUE}` already exists!")
userSchema.pre<IUser>('save',function(next){
console.log(this)
if(typeof this.password ==="string"){
  this.salt= bcrypt.genSaltSync()
  this.hash= bcrypt.hashSync(this.password, this.salt)
  this.password = undefined;
  next()
}else{
  next(new Error("password missing"))
}

next()
});

userSchema.methods.validPassword = function(password:string){

  return bcrypt.compareSync(password,this.hash)
}
export default mongoose.model<IUser>('users',userSchema);