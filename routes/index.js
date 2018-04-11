// var express = require('express')
// var router = express.Router()

// router.get('/route',function (req,res,next) {
//     res.render('index',  {title: 'Express'})

// })
// module.exports = router;
exports.partials=function(req,res){
    res.render('default',{
      title:'about partials',
      classname:'about'
    });
  }
  exports.me=function(req,res){
    res.render('default',{
      title:'Me',
      classname:'about'
    });
  }