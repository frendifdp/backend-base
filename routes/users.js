const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const auth = require('../middleware/auth');

router.get('/', checkAuth, usersController.getUsersById);
router.post('/login', usersController.login);

module.exports = router;