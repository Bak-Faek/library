import express from "express"
import OuvrageController from "./controller/OuvrageController.js";


const router = express.Router();



router.get("/ouvrage", OuvrageController.read);

export default router;