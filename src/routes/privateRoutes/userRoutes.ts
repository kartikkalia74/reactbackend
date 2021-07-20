import * as express from 'express';
import userController from '../../controllers/userController'
import {message} from '../../constant' 
const userRoutes = express.Router()


userRoutes.get("/",(req,res)=>{

   const query:{userId:string} = req.query as {userId:string}
       userController.listUsers(query).then((_result)=>{
        res.status(200).json({message:message.CREATESUCCESS , data:_result})
       }).catch((err)=>{
              console.log(err)
        res.status(500).json({err})
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