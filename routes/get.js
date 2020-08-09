const express = require("express");

const router = express.Router();

const fileController = require('../controller/fileController');

router.get('/getFreq',fileController.getFrequency);

router.get('/',fileController.getFile);

module.exports = router;