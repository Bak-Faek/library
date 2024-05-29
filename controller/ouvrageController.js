import { OuvrageDAO } from "../model/OuvrageDAO.js";
import { Database } from "../model/Database.js";

const db = new Database();
const ouvrageDAO = new OuvrageDAO(db);

const read = async (req, res, next) => {
  try {
    const ouvrage = await ouvrageDAO.read();

    res.json(ouvrage);
  } catch (err) {
    next(err);
  }
};

export default {
  read
};
