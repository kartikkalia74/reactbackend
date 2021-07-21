
import Controller from '../../plugin/controller'

class QuestionController extends Controller {

    constructor(){
        super()
    }

   static getInstance (){
        return new QuestionController()
    }

    async addQuestion ({title,content,keyword,postedBy}) {
        try{
            
            await new this.db.QuestionRequest({title,content,keyword, postedBy}).save()

        }catch(err){
            if(err.errors){
                throw this.Common.handleValidation(err);
            }
            throw err;            
        }
    }

    async listQuestion(){
        try{
            return await this.db.QuestionRequest.find({}).populate('postedBy','firstName lastName')
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

export default QuestionController.getInstance()