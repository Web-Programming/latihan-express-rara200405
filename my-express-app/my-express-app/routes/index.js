var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res,next){
  res.render('about', {title: 'about us'});
});
router.get('/Kontak', function(req, res,next){
  res.render('Kontak', {title: 'Hubungi Kami'});
});

module.exports = router;
