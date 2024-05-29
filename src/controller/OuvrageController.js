
const tables = require("../tables.js");

const read = async (req, res, next) => {
  try {
    const ouvrage = await tables.ouvrage.read();

    const result = res.json(ouvrage);
  } catch (err) {
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.ouvrage.readById(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports= {
  read,
  readById
};
