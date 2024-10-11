var express = require('express');
var router = express.Router();
const mainControllers=require("../controllers/main");


/* GET home page. */
router.get('/',mainControllers.index);
// buat route ke halaman kontak(dengan method get)
router.get('/kontak', mainControllers.kontak);
routerget('/kontak3',mainControllers.kontak3);
module.exports = router;
