var express = require('express');
var router = express.Router();
var Controller = require('../controller/article')
var Verify = require('../middleware/verify')

router.get('/',  Controller.getAllArticle)
router.get('/me', Verify.isLogin, Controller.getMyArticle)
router.post('/create', Verify.isLogin, Controller.createArticle)
router.delete('/delete/:id', Controller.deleteArticle)
router.get('/:id', Verify.isLogin, Controller.findAnArticle)
router.put('/edit/:id', Verify.isLogin, Controller.updateArticle)


module.exports = router;