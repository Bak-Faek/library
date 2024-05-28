import { OuvrageDAO } from "../model/OuvrageDAO";
import { Database } from "../model/Database";

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
db.stop();

module.exports = {
  read,
};


