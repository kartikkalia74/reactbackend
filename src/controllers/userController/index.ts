
import Controller from '../../plugin/controller'

class userController extends Controller {

    constructor(){
        super()
    }

   static getInstance (){
        return new userController()
    }

    async addUser ({firstName, lastName, skills,email,about, password},file) {
        try{
            let img =''
            if(file.filename){
                img=`/static/userprofile/${file.filename}`;
            }
            await new this.db.User({firstName, lastName, email,skills,img,about, password}).save()

        }catch(err){
            if(err.errors){
                throw this.Common.handleValidation(err);
            }
            throw err;          
        }
    }


    async emailLogin ({email , password}){
       try{
        const user =  await this.db.User.findOne({email}).select('+hash')
        if(user && user.validPassword(password)){
            return user;
        }
            throw new Error("Invalid username or password")
        
       }catch(err){
        throw err;
       }
        
    }

    /**
     * [
{$lookup:{from:"followrequests",
   let:{userId:"$_id"},
   pipeline:[{$match:{$expr:{$or:[{$eq:["$sendBy","$$userId"]},{$eq:["$sendTo","$$userId"]}]}}}],
    as:"request"
    
    }},
    {$unwind:{path:"$request", preserveNullAndEmptyArrays:true}},
    {$addFields:{status:{
        $switch:{
            branches:[{case:{$eq:["$request.sendBy","$_id"]}, then:1},
            {case:{$eq:["$request.sendTo","$_id"]}, then:2}
            ],
            default:'op'
            }
        }}},
    ]
     * @param param0 
     * @returns 
     */
    async listUsers({userId}){
        try{
            const list =await this.db.User.find({_id:{$ne:userId}}).populate('skills')
            return list;
        }catch(err){
            throw err;
        }
    }

    async updateUser({
        userId,
        firstName ,
        lastName ,
        skills,
        email
    }){
        const updateObj = {}
        if(email){
            await this.db.User.findByIdAndUpdate()
        }
    }
}

export default userController.getInstance()