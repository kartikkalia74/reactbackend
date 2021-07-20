import * as express from 'express';
import skillroutes from './skillRoutes'
import userRoutes from './userRoutes'
import articleRoutes from './articleRoutes'
const privateRoutes = express.Router()


privateRoutes.use('/skill',skillroutes);
privateRoutes.use('/user',userRoutes);
privateRoutes.use('/article',articleRoutes);


export default privateRoutes;