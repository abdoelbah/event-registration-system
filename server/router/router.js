const express = require('express');
const router = express.Router();
const userController = require('../controller/attendorController');

router.post('/Register',userController.Register)


module.exports = router;
