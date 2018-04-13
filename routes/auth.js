require('dotenv').config()
var express = require('express')
var router = express.Router();
var db = require('../models')
var bcrypt = require('bcrypt')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken')

router.post("/login", (req, res, next)=>{
  console.log('Login Auth Route')
  let hashedPass = ''
  let passwordMatch = false

  db.user.find({
    where:{email: req.body.email}
  }).then( user => {
    if(user){
      hashedPass = user.dataValues.password
      passwordMatch = bcrypt.compareSync(req.body.password, hashedPass)
      if(passwordMatch){
        var token = jwt.sign(user.dataValues, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        })
        db.snapbook.findAll({
          where: {user_id: user.id}
        }).then(snaps => {
          res.json({user, token, snaps})
        })
        
      }else{
        res.send('Login Attempt Failed')
      }
    }else{
      res.send('Login Attempt Failed')
    }
  })
})

router.post("/signup", (req, res, next)=>{
  console.log('Signup Auth Route')
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults:{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: req.body.password
    }
  }).spread( (user, created) =>{
    if(created){
      var token = jwt.sign(user.dataValues, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })
      res.json({user, token})
    }else{
      res.send("Account Already Exists, Please Login Here")
    }
  })
})

router.post('/me/from/token', (req, res, next) => {
  console.log('auth from token route')
  var token = req.body.token
  if(!token){
    res.status(401).json({message: "Must pass the token"})
  }else{
    jwt.verify(token, process.env.JWT_SECRET, function(err, user){
      console.log(user)
      if(err){
        res.status(401).send(err)
      }else{
        db.user.find({
          where:{id: user.id}
        }).then( data => {
          res.send(data)
        })
      }
    })
  }
})


module.exports = router;