
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
            const list =await this.db.User.aggregate([
                
                {$match:{_id:{$ne:this.mongoose.Types.ObjectId(userId)}}},
                {$lookup:{from:"followrequests",
            let:{userId:"$_id"},
            pipeline:[{$match:{$expr:{$or:[{$eq:["$sendBy","$$userId"]},{$eq:["$sendTo","$$userId"]}]}}}],
             as:"request"
             
             }},
             {$unwind:{path:"$request", preserveNullAndEmptyArrays:true}},
             {$match:{"request.status":{$nin:[1,2]}}},
             {$addFields:{status:{
                 $switch:{
                     branches:[{case:{$eq:["$request.sendBy","$_id"]}, then:1},
                     {case:{$eq:["$request.sendTo","$_id"]}, then:2}
                     ],
                     default:0
                     }
                 }}},

                 {$lookup:{from:"skills",
    localField:"skills",
    foreignField:"_id",
    as:"skills"
    }},
    {$project:{firstName:1, lastName:1,skills:1,status:1,img:1,about:1}},
{$facet:{
    requestSend:[{$match:{status:1}}],
     newRequest:[{$match:{status:2}}],
     suggestPeople:[{$match:{status:0}}]
    }}    
    
             ])
            return list[0];
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