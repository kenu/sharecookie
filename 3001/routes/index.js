var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('token', 't' + Date.now());
  res.render('index', { title: 'Express 3001' });
});

router.get('/ajax', function(req, res, next) {
  res.cookie('ajaxtoken', 'a' + Date.now());
  res.end('<script>location.href="http://localhost:3000"</script>');
});

module.exports = router;
