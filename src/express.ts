
import databaseConfig from './config/databaseConnection';
import * as express from 'express';
import * as bodyParser  from 'body-parser';

import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes'; 


class InitConfigration {
     private  constructor(){
 databaseConfig()
}

static routes(){
    new InitConfigration()
    const route = express()

    route.use(bodyParser.urlencoded({ extended: false }))
    route.use(bodyParser.json())
     route.use('/public',publicRoutes);
     route.use('/private',privateRoutes);
    return route;
}

}

export default InitConfigration