const express = require('express');
const router = express.Router();
const controller = require('../controllers/booklist.controller')


//Tại endpoin api
router.get('/api/books',controller.booklist);
// Find
router.get ('/find', controller.find);


module.exports = router;