const db = require("../models");

const controller = {
  findAll: (req, res) => {
    db.Lists
      .find(req.query)
      .where('authorId').equals(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res, next) => {
    db.Lists
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(next);
  },
  remove: (req, res) => {
    db.Lists
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = controller;