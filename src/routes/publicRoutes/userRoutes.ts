import * as express from 'express';
import userController from '../../controllers/user'
import {message} from '../../constant' 
const userRoutes = express.Router()


userRoutes.post("/",(req,res)=>{
    
       userController.addUser(req.body).then((_result)=>{
        res.status(201).json({message:message.CreateSUCCESS})
       }).catch((err)=>{
        res.status(400).json({err})
       })
}
)
userRoutes.post("/login",(req,res)=>{
    userController.emailLogin(req.body).then((_result)=>{
        res.status(200).json({message:message.CreateSUCCESS})
       }).catch((err)=>{
        res.status(401).json({err:err.toString()})
       })
}
)
export default userRoutes;