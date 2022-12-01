var express = require('express');
var router = express.Router();
const Channel = require('../src/repositories/channels');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.status(200).json(await Channel.allChannels());
});

router.get('/:id', async function(req, res, next) {
    res.status(200).json(await Channel.findChannel(req.params.id));
});

module.exports = router;
