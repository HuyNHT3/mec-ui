var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ENGLISH SERVICE STATION');
});

module.exports = router;
