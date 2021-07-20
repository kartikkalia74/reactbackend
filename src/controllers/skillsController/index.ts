
import Controller from '../../plugin/controller'

class SkillController extends Controller {

    constructor(){
        super()
    }

   static getInstance (){
        return new SkillController()
    }

    async addSkill ({name,icon},file) {
        try{
            debugger
            console.log(file)
            await new this.db.Skill({name, icon:`/static/skills/${file.filename}`}).save()

        }catch(err){
            if(err.errors){
                throw this.Common.handleValidation(err);
            }
            throw err;            
        }
    }

    async listSkill(){
        try{
            return await this.db.Skill.find({})
        }catch(err){
            throw err
        }
            
    }


    // async emailLogin ({email , password}){
    //    try{
    //     const user =  await this.db.User.findOne({email}).select('+hash')
    //     if(user && user.validPassword(password)){
    //         return user;
    //     }
    //         throw new Error("Invalid username or password")
        
    //    }catch(err){
    //     throw err;
    //    }
        
    // }

    // async updateUser({
    //     userId,
    //     firstName ,
    //     lastName ,
    //     skills,
    //     email
    // }){
    //     const updateObj = {}
    //     if(email){
    //         await this.db.user.findByIdAndUpdate()
    //     }
    // }
}

export default SkillController.getInstance()