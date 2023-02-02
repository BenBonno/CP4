const models = require("../models");

const createUser = (req, res) => {
  const { username, password } = req.body;
  models.user
    .insert(username, password)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus("Username déjà utilisé");
    });
};

const getAllUsers = (req, res) => {
  models.user
    .findAllUsers()
    .then(([result]) => {
      res.json(result).status(200);
    })
    .catch((err) => {
      console.error("erreur recup users", err);
    });
};

const updateUser = (req, res) => {
  const { username, password } = req.body;
  models.user
    .update(username, password)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("erreur de MAJ", err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  models.user
    .delete(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("erreur de suppression", err);
    });
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
