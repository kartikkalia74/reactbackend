

import * as multer from 'multer';
import path = require('path');
import {v4 as uuid} from 'uuid';
class Common {
    // upload =multer({ dest: 'uploads/',limits:{fileSize:1024*1024*5}  })
    defaultConf={
        fileFilter: function (req, file, cb) {
          var filetypes = /jpeg|jpg|png|pdf/;
          var mimetype = filetypes.test(file.mimetype);
          var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      
          if (mimetype && extname) {
            return cb(null, true);
          }
      
          cb(
            "Error: File upload only supports the following filetypes - " + filetypes
          );
        },
        // 5*1024*1024 5242880
        limits: { fileSize: 5242880 },
        onError: function (err, next) {
          console.log("error", err);
          if (err instanceof multer.MulterError) {
            next(err.message);
          } else {
            next(err);
          }
        },
      }

    handleValidation(err) {
        const messages = []
        for (let field in err.errors) { return err.errors[field].message; }
        return messages;
    }

    upload(filePath:string){
        var driverStorage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, filePath)
            },
            filename: function (req, file, cb) {
                cb(null, uuid() +path.extname(file.originalname))
            }
        })
        return multer({...this.defaultConf,storage:driverStorage});
       
    }

    static getInstance(){
        return new Common();
    }
}

export default Common.getInstance();