import * as express from 'express';
import skillController from '../../controllers/skillsController'
import {message} from '../../constant' 
const skillRoutes = express.Router()

skillRoutes.route("/").
post(skillController.Common.upload('./images/skills').single('file'),(req,res)=>{
    skillController.addSkill(req.body,req.file).then((_result)=>{
     res.status(201).json({message:message.ADDSUCCESSFULLY})
    }).catch((err)=>{
     res.status(400).json({err})
    })
}
).get((req,res)=>{
    skillController.listSkill(req.query).then((_result)=>{
     res.status(200).json({message:message.TRUEMESSAGE ,data:_result})
    }).catch((err)=>{
     res.status(500).json({err})
    })
}
)

export default skillRoutes;
