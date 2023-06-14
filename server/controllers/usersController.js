const { User } = require("../models/usersModel")
const { logger } = require("../config/logger/userLogger")
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");


const usersController = {
    getAll: (req, res) => {

        User.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        User.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })

        user.save()

        res.json(user)
        logger.log('info', 'New User Added', { message: 'user added..: ' });
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        User.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
                logger.log('info', 'User is Deleted', { message: 'user deleted.. Id: ' + id });
            })
            .catch(err => {
                res.status(500).json(err)
                logger.log('error', 'User is not Deleted', { message: 'user is not deleted.. Id: ' + id });
            })
    },
    update: (req, res) => {
        let id = req.params.id;

        User.findById(id)
            .then(data => {
                data.user = req.body.user;

                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    usersController
}
