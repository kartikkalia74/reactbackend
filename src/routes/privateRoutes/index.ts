import * as express from 'express';

const privateRoutes = express.Router()


privateRoutes.get('/',(req,res)=>{
    res.send("kkkkkkkk")
})
export default privateRoutes;