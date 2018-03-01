const jwt = require('jsonwebtoken')

function isLogin(req, res, next){
    //console.log(req.headers.token)
    jwt.verify(req.headers.token, 'w5f45wf4', (err, decoded) => {
        if(!err){
            //req.decoded = decoded
            req._id = decoded._id 
            //console.log(req.decoded)
            next()
        } else {
            res.send(err)
        }
    })
}

module.exports = {
    isLogin
}