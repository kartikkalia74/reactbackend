
import db from '../database';
import Common from '../../common';


class Controller {
    db:db;
    Common:typeof Common =  Common;
    constructor(){
        this.db = new db()
    }
    

}

export default Controller