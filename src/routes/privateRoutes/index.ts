import * as express from 'express';
import skillroutes from './skillRoutes'
import userRoutes from './userRoutes'
import articleRoutes from './articleRoutes'
import followRequestRoutes from './followRequestRoutes';
import questionRoutes from './questionRoutes';
const privateRoutes = express.Router()


privateRoutes.use('/skill',skillroutes);
privateRoutes.use('/user',userRoutes);
privateRoutes.use('/article',articleRoutes);
privateRoutes.use('/follow',followRequestRoutes);
privateRoutes.use('/question',questionRoutes);
export default privateRoutes;