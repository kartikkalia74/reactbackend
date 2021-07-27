
import db from '../database';
import Common from '../../common';
import * as mongoose from 'mongoose';

class Controller {
    db:db;
    Common:typeof Common =  Common;
    mongoose= mongoose;
    constructor(){
        this.db = new db()
    }
    

}

export default Controller