
import databaseConfig from './config/databaseConnection';
import * as express from 'express';
import * as bodyParser  from 'body-parser';

import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes'; 
import path = require('path');


class InitConfigration {
     private  constructor(){
 databaseConfig()
}

static routes(){
    new InitConfigration()
    const route = express()

    route.use(bodyParser.urlencoded({ extended: false }))
    route.use(bodyParser.json())
    route.use("/static", express.static(path.join(__dirname, "../images")));
    route.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept,authtoken"
        );
      
        next();
      });
     route.use('/public',publicRoutes);
     route.use('/private',privateRoutes);
    return route;
}

}

export default InitConfigration