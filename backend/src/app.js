import express from "express"
import router from "./router.js";

const app = express()
app.use(express.json());
app.use('/', router)


app.listen(8500, () => {
    console.log("Server started ....")
})


export default app;

// import { Database } from "./model/Database.js";
// import { AdherentDAO } from "./model/AdherentDAO.js";
// import { OuvrageDAO } from "./model/OuvrageDAO.js";
// import { ReservationDAO } from "./model/ReservationDAO.js";
// import { LendingDAO } from "./model/LendingDAO.js";


// const db = new Database();

// const adherentDAO = new AdherentDAO(db);
// const ouvrageDAO = new OuvrageDAO(db);
// const reservationDAO = new ReservationDAO(db);
// const lendingDAO = new LendingDAO(db);

// adherent
// adherentDAO.create(
//   "Eve",
//   "grand",
//   "202 Place de la Victoire, Bordeaux",
//   333789654,
//   "eve.grand@example.com"
// );
// adherentDAO.readById(2);
// adherentDAO.read()
// reservationDAO.selectFilter("firstname", "Alice");
// adherentDAO.delete(2);
// adherentDAO.update(
//   2,
//   "Eve",
//   "modified",
//   "456 New Address, Bordeaux",
//   "555987654",
//   "eve.updated@example.com"
// );

// ouvrage
// ouvrageDAO.create("Book Title", "Book Author", "2024-05-28", 1);
// ouvrageDAO.selectById(1);
// ouvrageDAO.selectByField("author", "Book Author");
// ouvrageDAO.update(1, "Updated Book Title", "Updated Book Author", "2024-06-01", 2);
// ouvrageDAO.delete(11);

//reservation
// reservationDAO.create("2024-05-28", 1, 1);
// reservationDAO.selectById(1);
// reservationDAO.selectFilter("adherent_id", 5);
// reservationDAO.update(1, "2024-06-01", 2, 2);
// reservationDAO.delete(11);

//lending
// lendingDAO.create("2024-05-28", "2024-06-28", 1, 1);
// lendingDAO.selectById(1);
// lendingDAO.update(1, "2024-05-29", "2024-06-29", 1, 6);
// lendingDAO.delete(11);

// db.stop();

