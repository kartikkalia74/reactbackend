
import db from '../database'
class Controller {
    db:db
    constructor(){
        this.db = new db()
    }
    

}

export default Controller