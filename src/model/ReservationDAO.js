export class ReservationDAO {
  constructor(db /* CLASS DATABASE */) {
      //this.db = db;
      this.connection = db.connection;
  }

  create(reservation_date, adherent_id, ouvrage_id) {
      const query = `INSERT INTO reservation (reservation_date, adherent_id, ouvrage_id) VALUES (?, ?, ?);`;
      const values = [reservation_date, adherent_id, ouvrage_id];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }

  select() {
      const query = `SELECT * FROM reservation;`;
      const values = [];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }

  selectById(id) {
      const query = `SELECT * FROM reservation WHERE id = ?;`;
      const values = [id];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }

  selectFilter(filter, value) {
      const query = `SELECT * FROM reservation JOIN adherent ON adherent_id = adherent.id JOIN ouvrage ON ouvrage_id = ouvrage.id WHERE ${filter} = ?;`;
      const values = [value];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }

  update(id, reservation_date, adherent_id, ouvrage_id) {
      const query = `UPDATE reservation SET reservation_date = ?, adherent_id = ?, ouvrage_id = ? WHERE id = ?;`;
      const values = [reservation_date, adherent_id, ouvrage_id, id];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }

  delete(id) {
      const query = `DELETE FROM reservation WHERE id = ?;`;
      const values = [id];
      this.connection.execute(query, values, (err, result, fields) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log(result, "RESULT");
      });
  }
}