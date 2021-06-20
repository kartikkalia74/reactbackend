
import user from '../../models/user';
import Controller from '../../plugin/controller'

class userController extends Controller {

    constructor(){
        super()
    }

   static getInstance (){
        return new userController()
    }

    async addUser ({firstName, lastName, skills,email, password}) {
        try{
            await new this.db.User({firstName, lastName, email,skills, password}).save()

        }catch(err){
            throw err;            
        }
    }


    async emailLogin ({email , password}){
       try{
        const user =  await this.db.User.findOne({email}).select('+hash')
        if(user && user.validPassword(password)){
            return true;
        }
            throw new Error("Invalid username or password")
        
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
            await user.findByIdAndUpdate()
        }
    }
}

export default userController.getInstance()