const express  = require("express");
const router = express.Router();

const ouvrageController = require("./controller/OuvrageController.js");

router.get("/ouvrage", ouvrageController.read);

module.exports = router;