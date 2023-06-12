const { User } = require("../models/usersModel")
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
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        User.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
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
