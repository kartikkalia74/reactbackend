
import Controller from '../../plugin/controller'

class ArticleController extends Controller {

    constructor(){
        super()
    }

   static getInstance (){
        return new ArticleController()
    }

    async addArticle ({title,content,keyword,postedBy}) {
        try{
            debugger
            await new this.db.Article({title,content,keyword, postedBy}).save()

        }catch(err){
            if(err.errors){
                throw this.Common.handleValidation(err);
            }
            throw err;            
        }
    }

    async listArticle(){
        try{
            return await this.db.Article.find({}).populate('postedBy','firstName lastName')
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

export default ArticleController.getInstance()