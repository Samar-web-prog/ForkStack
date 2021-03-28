var express = require('express');
const { route } = require('../app');
var router = express.Router();
var index =require( '../controllers/index');
var controllerUser=require( '../controllers/controllerUser');
router.get('/all',index.getAll);
router.get('/all1',controllerUser.getAll);
router.post('/register',controllerUser.register);
router.post('/login',controllerUser.login);

router.post('/hello',index.postUser1);
module.exports = router;
