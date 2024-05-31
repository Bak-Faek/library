import { Database } from "../model/Database.js";
import { LendingDAO } from "../model/LendingDAO.js";

const db = new Database();
const lendingDAO = new LendingDAO(db);

const read = (req, res) => {
  lendingDAO
    .read()
    .then((lending) => {
      res.json(lending);
    })
    .catch((error) => {
      res.json(error);
    });
};

const create = (req, res) => {
  const { lending_date, return_date, adherent_id, ouvrage_id } = req.body;
  lendingDAO
    .create(lending_date, return_date, adherent_id, ouvrage_id)
    .then((lending) => {
      res.json(lending);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const { lending_date, return_date, adherent_id, ouvrage_id } = req.body;
  lendingDAO
    .update(lending_date, return_date, adherent_id, ouvrage_id, id)
    .then((lending) => {
      res.json(lending);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  lendingDAO
    .delete(id)
    .then((lending) => {
      res.json(lending);
    })
    .catch((error) => {
      res.json(error);
    });
};

export default {
  read,
  create,
  update,
  deleteById,
};
