import express from "express"
import OuvrageController from "./controller/OuvrageController.js";
import AdherentController from "./controller/AdherentController.js";


const router = express.Router();

// CRUD Ouvrage
router.get('/ouvrage', OuvrageController.read)
router.post('/ouvrage', OuvrageController.create)
router.put('/ouvrage/:id', OuvrageController.update)
router.delete('/ouvrage/:id', OuvrageController.deleteById)


// CRUD Adherent
router.get('/adherent', AdherentController.read)
router.post('/adherent', AdherentController.create)
router.put('/adherent/:id', AdherentController.update)
router.delete('/adherent/:id', AdherentController.deleteById)

export default router;