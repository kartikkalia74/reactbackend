import * as express from 'express';
import userController from '../../controllers/userController'
import {message} from '../../constant' 
const userRoutes = express.Router()


userRoutes.post("/",userController.Common.upload('./images/userprofile').single('file'),(req,res)=>{
       console.log(req.body,req.file,req.files)
       userController.addUser(JSON.parse(req.body.data),req.file).then((_result)=>{
        res.status(201).json({message:message.CREATESUCCESS})
       }).catch((err)=>{
              console.log(err)
        res.status(400).json({err})
       })
}
)
userRoutes.post("/login",(req,res)=>{
    userController.emailLogin(req.body).then((_result)=>{
        res.status(200).json({message:message.LOGINSUCCESS,data:_result})
       }).catch((err)=>{
        res.status(401).json({err:err.toString()})
       })
}
)
export default userRoutes;