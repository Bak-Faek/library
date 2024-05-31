import { Database } from "../model/Database.js";
import { ReservationDAO } from "../model/ReservationDAO.js";

const db = new Database();
const reservationDAO = new ReservationDAO(db);

const read = (req, res) => {
  reservationDAO
    .read()
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((error) => {
      res.json(error);
    });
};

const readById = (req, res) => {
  reservationDAO
    .readById()
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((error) => {
      res.json(error);
    });
};

const create = (req, res) => {
  const { reservation_date, adherent_id, ouvrage_id } = req.body;
  reservationDAO
    .create(reservation_date, adherent_id, ouvrage_id)
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((error) => {
      res.json(error);
    });
};

const update = (req, res) => {
  const id = req.params.id;
  const { reservation_date, adherent_id, ouvrage_id } = req.body;
  reservationDAO
    .update(reservation_date, adherent_id, ouvrage_id, id)
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;
  reservationDAO
    .delete(id)
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((error) => {
      res.json(error);
    });
};

export default {
  read,
  readById,
  create,
  update,
  deleteById,
};
