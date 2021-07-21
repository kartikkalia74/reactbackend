

import * as express from 'express';
import FollowRequestController from '../../controllers/followRequest'
import {message} from '../../constant' 
const followRequestRoutes = express.Router()

followRequestRoutes.route("/").
post((req,res)=>{
    FollowRequestController.sendRequest(req.body).then((_result)=>{
     res.status(201).json({message:message.SENDMESSAGE})
    }).catch((err)=>{
     res.status(400).json({err})
    })
}
).patch((req,res)=>{
    FollowRequestController.respondToRequest(req.body).then((_result)=>{
     res.status(200).json({message:message.TRUEMESSAGE ,data:_result})
    }).catch((err)=>{
     res.status(500).json({err})
    })
}
)

export default followRequestRoutes;
