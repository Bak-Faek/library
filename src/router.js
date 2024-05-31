import express from "express"
import OuvrageController from "./controller/OuvrageController.js";


const router = express.Router();


router.get('/ouvrage', OuvrageController.read)
router.post('/ouvrage', OuvrageController.create)
router.put('/ouvrage/:id', OuvrageController.update)
router.delete('/ouvrage/:id', OuvrageController.deleteById)

export default router;