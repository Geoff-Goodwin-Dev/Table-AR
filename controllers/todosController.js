const db = require("../models");

const controller = {
  findAll: (req, res) => {
    db.ListItem
      .find(req.query)
      .where('listID').equals(req.params.id)
      .sort('orderNumber')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res, next) => {
    db.ListItem
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(next);
  },
  remove: (req, res) => {
    db.ListItem
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = controller;