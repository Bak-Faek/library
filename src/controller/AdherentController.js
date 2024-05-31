import { Database } from "../model/Database.js";
import { AdherentDAO } from "../model/AdherentDAO.js";

const db = new Database();
const adherentDAO = new AdherentDAO(db);

const read = (req, res) => {
  adherentDAO
    .read()
    .then((adherent) => {
      res.json(adherent);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
    const id = req.params.id;
    adherentDAO
      .readById(id)
      .then((adherent) => {
        res.json(adherent);
      })
      .catch((error) => {
        res.json(error);
      });
  };

  const readByField = (req, res) => {
    const field = req.params["field"];
    const value = req.params["value"];
    adherentDAO
      .selectFilter(field, value)
      .then((allOuvrage) => {
        res.json(allOuvrage);
      })
      .catch((error) => {
        res.json(error);
      });
  };
  

const create = (req, res) => {
  const { firstname, lastname, address, phone,email } = req.body;
  adherentDAO
    .create(firstname, lastname, address, phone,email)
    .then((adherent) => {
      res.json(adherent);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, address, phone,email } = req.body;
  adherentDAO
    .update(firstname, lastname, address, phone,email, id)
    .then((adherent) => {
      res.json(adherent);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  adherentDAO
    .delete(id)
    .then((adherent) => {
      res.json(adherent);
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
