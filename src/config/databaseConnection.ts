import * as mongoose from 'mongoose';

const init = () => {
    mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser:true , useUnifiedTopology: true},(error)=>{
        if(error){
            console.log('database exited')
        }else {
            console.log('database connected')
        }
    
    })
}


export default init;