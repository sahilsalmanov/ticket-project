const express = require('express');
const { eventsController } = require('../controllers/eventsController');
const { validate } = require('../middleware/validation');
const { body } = require('express-validator');
const eventsRoute = express.Router();


eventsRoute.get('/', eventsController.getAll)
eventsRoute.get('/:id', eventsController.getById)
eventsRoute.post('/',eventsController.add)
eventsRoute.delete('/:id', eventsController.deleteById)
eventsRoute.put('/:id', eventsController.update)


module.exports = {
    eventsRoute
}