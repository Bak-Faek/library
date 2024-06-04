import { Database } from "../model/Database.js";
import { UserDAO } from "../model/UserDAO.js";

const db = new Database();
const userDAO = new UserDAO(db);

const read = (req, res) => {
  userDAO
    .read()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
    const id = req.params.id;
    userDAO
      .readById(id)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.json(error);
      });
  };

  const readByField = (req, res) => {
    const field = req.params["field"];
    const value = req.params["value"];
    userDAO
      .selectFilter(field, value)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.json(error);
      });
  };
  

const create = (req, res) => {
  const { firstname, lastname, address, phone,email } = req.body;
  userDAO
    .create(firstname, lastname, address, phone,email)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, address, phone,email } = req.body;
  userDAO
    .update(firstname, lastname, address, phone,email, id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  userDAO
    .delete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

export default {
  read,
  readById,
  readByField,
  create,
  update,
  deleteById,
};
