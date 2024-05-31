import { Database } from "../model/Database.js";
import { OuvrageDAO } from "../model/OuvrageDAO.js";

const db = new Database();
const ouvrageDAO = new OuvrageDAO(db);

const read = (req, res) => {
  ouvrageDAO
    .read()
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const create = (req, res) => {
  const { name, author, publication_date, category_id } = req.body;
  ouvrageDAO
    .create(name, author, publication_date, category_id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const { name, author, publication_date, category_id } = req.body;
  ouvrageDAO
    .update(name, author, publication_date, category_id, id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  ouvrageDAO
    .delete(id)
    .then((allOuvrage) => {
      res.json(allOuvrage);
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
