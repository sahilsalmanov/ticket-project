const { Events } = require("../models/eventsModel");
const { logger } = require("../config/logger/eventLogger")
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const eventsController = {
  getAll: (req, res) => {
    Events.find()
      .populate([{ path: "seats" }, { path: "category" }])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    Events.findById(id)
      .populate([{ path: "seats" }, { path: "category" }])
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).json({ msg: "Not found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: async (req, res) => {
    try {
      const file = req.files.imagePath;
      const namePic = uuidv4() + ".jpeg";
      const path = __dirname + "/.." + "/imgs/" + namePic;
      await file.mv(path);

      const event = new Events({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        locationName: req.body.locationName,
        location: req.body.location,
        date: req.body.date,
        ticket: req.body.ticket,
        minimumPrice: req.body.minimumPrice,
        maxsimumPrice: req.body.maxsimumPrice,
        seats: req.body.seats,
        startTime: req.body.startTime,
        finishTime: req.body.finishTime,
        popular: req.body.popular,
        imagePath: process.env.BASE_URI + namePic,
      });

      await event.save();
      res.send("Success!!");
      logger.log('info', 'New Event Added', { message: 'event added..: ' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    Events.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
        logger.log('info', 'Event is Deleted', { message: 'event deleted.. Id: ' + id });
      })
      .catch((err) => {
        res.status(500).json(err);
        logger.log('error', 'Event is not Deleted', { message: 'event is not deleted.. Id: ' + id });
      });
  },
  update: (req, res) => {
    let id = req.params.id;

    Events.findById(id)
      .then((data) => {
        data.event = req.body.event;

        data.save();

        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  eventsController,
};
