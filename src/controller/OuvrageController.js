import {Database} from "../model/Database.js";
import {OuvrageDAO} from "../model/OuvrageDAO.js";

const db = new Database();
const ouvrageDAO = new OuvrageDAO(db);

const read = (req, res) => {
  ouvrageDAO.read((data, error) => {
      if (error) {
          res.status(500)
          res.json({
              message: "Error mysql !"
          })
      }
      res.json(data)
  })
}


export default {
  read
};
