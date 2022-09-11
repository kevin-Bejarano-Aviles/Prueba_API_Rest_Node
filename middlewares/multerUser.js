const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{//donde va a ir el archivo
        cb(null,'public/img/users')
    },
    filename:(req,file,cb)=>{//como se va a llamar el archivo
            cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
    
});


module.exports = {storage:storage};
/* const uploadUser = multer({
    storage,
    
}); */
/* fileFilter:(req,file,cb)=>{
        if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
            cb(null,true);
        }else{
           
           cb(exports ='asdasd',false)
          
        }
    } */