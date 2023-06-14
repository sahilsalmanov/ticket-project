const { Category } = require("../models/categoryModel");
const { logger } = require("../config/logger")
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const categoryController = {
  getAll: (req, res) => {
    Category.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    Category.findById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).json({ msg: "Not found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    let category = new Category({
      type: req.body.type,
    });

    category.save();

    res.json(category);
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    Category.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
        logger.log('info', 'Category Delete', { message: 'category deleted.. Id: ' + id });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  update: (req, res) => {
    let id = req.params.id;

    Category.findById(id)
      .then((data) => {
        data.category = req.body.category;

        data.save();

        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  categoryController,
};
