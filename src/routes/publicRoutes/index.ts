import * as express from 'express';
import publicuserRoutes  from './userRoutes'
const publicRoutes = express.Router()

publicRoutes.use('/user',publicuserRoutes)

export default publicRoutes;