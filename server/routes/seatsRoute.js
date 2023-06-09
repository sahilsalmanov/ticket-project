const express = require('express');
const { seatsController } = require('../controllers/seatsController');
const { validate } = require('../middleware/validation');
const { body } = require('express-validator');
const seatsRoute = express.Router();


seatsRoute.get('/', seatsController.getAll)
seatsRoute.get('/:id', seatsController.getById)
seatsRoute.post('/',seatsController.add)
seatsRoute.delete('/:id', seatsController.deleteById)
seatsRoute.put('/:id', seatsController.update)


module.exports = {
    seatsRoute
}