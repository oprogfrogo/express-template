var express = require('express');
var router = express.Router();
const processDb = require('../database').process;

router.get('/products', async function(req, res) {
  // const product = await processDb.raw("SELECT * FROM process.ProductInfo WHERE pi_code = ?", [req.body.pi_code])
  // return res.send(product[0]);
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

router.post('/visareg', async function(req, res) {
  const product = await processDb.raw("SELECT * FROM visareg.VisaRegInfo WHERE vi_master_code = ?", [req.body.mastercode])
  return res.send(product[0]);
});

module.exports = router;
