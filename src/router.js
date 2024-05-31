import express from "express"
import OuvrageController from "./controller/OuvrageController.js";
import AdherentController from "./controller/AdherentController.js";
import ReservationController from "./controller/ReservationController.js";
import LendingController from "./controller/LendingController.js";


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

// CRUD Reservation
router.get('/reservation', ReservationController.read)
router.post('/reservation', ReservationController.create)
router.put('/reservation/:id', ReservationController.update)
router.delete('/reservation/:id', ReservationController.deleteById)

// CRUD Lending
router.get('/lending', LendingController.read)
router.post('/lending', LendingController.create)
router.put('/lending/:id', LendingController.update)
router.delete('/lending/:id', LendingController.deleteById)

export default router;