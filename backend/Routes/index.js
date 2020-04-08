const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {config} = require('../config')

router.post('/api/auth/token', function(req, res){
    const {email, username, name} = req.body;
    const token = jwt.sign({sub: username, email, name}, config.authJwtSecret)
    res.json({access_token: token})
})

router.get('/api/auth/verify', function (req, res, next) {
    const { access_token } = req.query;
    
    try{
        const decoded = jwt.verify(access_token, config.authJwtSecret)
        res.json({message: "el token es valido", username: decoded.sub})
    }catch(err){
        next(err)
    }
} )

module.exports = router;