var express = require('express');
const { route } = require('../app');
var router = express.Router();
var multer =require('multer');
var passport=require('passport');
var verify =require('../controllers/VerifyToken');
var preferencesController=require('../controllers/preferencesController');
var authenticate=require('../controllers/userManager/authenticate');
//Import controller
var index =require( '../controllers/index');
var controllerUser=require( '../controllers/controllerUser');
var productController=require('../controllers/productController');
var sendMailer=require('../controllers/userManager/sendMailer');
var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, 'uploads/');    
  }, 
  filename: function (req, file, cb) { 
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
     cb(null , file.originalname);   
  }
});
const upload=multer({storage:storage});
//Routes for userController
router.post('/register',upload.single('image'),controllerUser.register);
router.post('/login',controllerUser.login);
router.put('/updateUser',upload.single('image'),verify,controllerUser.Update);
router.get('/alluser',controllerUser.getUser);
router.delete('/deleteUser',verify,controllerUser.deleteUser);
//LogIn with Google
router.post('/api/googleLogin',authenticate.googleLogin);
router.post('/api/googleRegister',authenticate.googleRegister);

//Routes For Prefenrences
router.post('/addPreferences',verify,preferencesController.addPreferences);
router.put('/updatePreferences',verify,preferencesController.updatePreference);
router.get('/userPreferences',verify,preferencesController.getUserPreferences);
//Routes for the Shop
router.get('/products',productController.getProducts);
router.get('/type',productController.getProductType);
router.get('/shop/user',verify,productController.getUsserPref);
router.get('/filterProduct/:type',productController.filterProduct);
router.get('/filterProductSize/:size',productController.filterProductSize);
router.get('/filterProductSex/:sex',productController.filterProductSex);
router.post('/addProducts',upload.single('image'),productController.addProducts);


router.post('/sendMail/:Email',sendMailer.sendMail);



module.exports = router;
