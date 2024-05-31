
const tables = require("../tables.js");

const read = async (req, res, next) => {
  try {
    const ouvrage = await tables.ouvrage.read();

    const result = res.json(ouvrage);
  } catch (err) {
    next(err);
  }
};

module.exports= {
  read
};
