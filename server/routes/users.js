var express = require('express');
var router = express.Router();
var Controller = require('../controller/user')
var Verify = require('../middleware/verify') 

router.get('/', Controller.findAllUser)
router.post('/signup', Controller.createUser)
router.get('/:id', Controller.findAUser)
router.post('/login', Controller.login)
router.delete('/delete/:id', Controller.deleteUser)
router.put('/update', Controller.updateUser)

module.exports = router;
