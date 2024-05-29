const express  = require("express");
const router = express.Router();

const ouvrageController = require("./controller/OuvrageController.js");

router.get("/ouvrage", ouvrageController.read);
router.get("/ouvrage/:id", ouvrageController.readById);

module.exports = router;