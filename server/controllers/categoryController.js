const { Category } = require("../models/categoryModel");
<<<<<<< HEAD
const { logger } = require("../config/logger/categoryLogger")
=======
const { logger } = require("../config/logger")
>>>>>>> b7d93bbf5f7f33c85c43d249568c9311d49aec0c
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
    logger.log('info', 'New Category Added', { message: 'category added.. category: ' + category });
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    Category.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
<<<<<<< HEAD
        logger.log('info', 'Category is Deleted', { message: 'category deleted.. Id: ' + id });
=======
        logger.log('info', 'Category Delete', { message: 'category deleted.. Id: ' + id });
>>>>>>> b7d93bbf5f7f33c85c43d249568c9311d49aec0c
      })
      .catch((err) => {
        res.status(500).json(err);
        logger.log('error', 'Category is not Deleted', { message: 'category is not deleted.. Id: ' + id });
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
