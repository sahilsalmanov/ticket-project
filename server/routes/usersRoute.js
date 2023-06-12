const express = require('express');
const { usersController } = require('../controllers/usersController');
const { validate } = require('../middleware/validation');
const { body } = require('express-validator');
const usersRoute = express.Router();


usersRoute.get('/', usersController.getAll)
usersRoute.get('/:id', usersController.getById)
usersRoute.post('/',usersController.add)
usersRoute.delete('/:id', usersController.deleteById)
usersRoute.put('/:id', usersController.update)


module.exports = {
    usersRoute
}