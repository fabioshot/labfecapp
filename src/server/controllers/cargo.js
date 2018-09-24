const cargo = require('../models').cargo;
const funcionario = require('../models').funcionario;

module.exports = {
  list(req, res) {
    return cargo
      .findAll({
        include: [{
          model: funcionario,
          as: 'funcionarios'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: funcionario, as: 'funcionarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((cargo) => res.status(200).send(cargo))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return cargo
      .findById(req.params.id, {
        include: [{
          model: funcionario,
          as: 'funcionarios'
        }],
      })
      .then((cargo) => {
        if (!cargo) {
          return res.status(404).send({
            message: 'Cargo não existe',
          });
        }
        return res.status(200).send(cargo);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return cargo
      .create({
        class_name: req.body.class_name,
      })
      .then((cargo) => res.status(201).send(cargo))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Classroom
      .findById(req.params.id, {
        include: [{
          model: funcionario,
          as: 'funcionarios'
        }],
      })
      .then(cargo => {
        if (!cargo) {
          return res.status(404).send({
            message: 'Cargo não existe',
          });
        }
        return cargo
          .update({
            class_name: req.body.class_name || cargo.class_name,
          })
          .then(() => res.status(200).send(cargo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return cargo
      .findById(req.params.id)
      .then(cargo => {
        if (!cargo) {
          return res.status(400).send({
            message: 'Cargo não existe',
          });
        }
        return cargo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
