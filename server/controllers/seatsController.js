const { Seats } = require("../models/seatsModel")
const { logger } = require("../config/logger/seatLogger")
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");


const seatsController = {
    getAll: (req, res) => {

        Seats.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Seats.findById(id)
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

        let seats = new Seats({
            A1: req.body.A1,
            A2: req.body.A2,
            B1: req.body.B1,
            B2: req.body.B2,
            VIP: req.body.VIP,
            General:req.body.General
        })

        seats.save()

        res.json(seats)
        logger.log('info', 'New Seats Added', { message: 'seats added.. ' });
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        Seats.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
                logger.log('info', 'Seat is Deleted', { message: 'seat deleted.. Id: ' + id });
            })
            .catch(err => {
                res.status(500).json(err)
                logger.log('error', 'Seat is not Deleted', { message: 'Seat is not deleted.. Id: ' + id });
            })
    },
    update: (req, res) => {
        let id = req.params.id;

        Seats.findById(id)
            .then(data => {
                data.seats = req.body.seats;

                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    seatsController
}
