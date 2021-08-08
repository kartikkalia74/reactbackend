

import * as express from 'express';
import questionController from '../../controllers/questionController';
import {message} from '../../constant'; 
const articleRoutes = express.Router();

articleRoutes.route("/").
post((req,res)=>{
    questionController.addQuestion(req.body).then((_result)=>{
     res.status(201).json({message:message.ADDSUCCESSFULLY})
    }).catch((err)=>{
     res.status(400).json({err})
    })
}).get((req,res)=>{
    questionController.listQuestion().then((_result)=>{
     res.status(200).json({message:message.TRUEMESSAGE ,data:_result})
    }).catch((err)=>{
     res.status(500).json({err})
    })
});

export default articleRoutes;
