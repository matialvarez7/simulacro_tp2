var express = require('express');
var router = express.Router();
const Category = require('../src/repositories/categories');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.json(await Category.allCategories());
});

module.exports = router;