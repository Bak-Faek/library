export class LendingDAO {
    constructor(db /* CLASS DATABASE */) {
      //this.db = db;
      this.connection = db.connection;
    }
  
    create(lending_date, return_date, adherent_id, ouvrage_id) {
      const query = `INSERT INTO lending (lending_date, return_date, adherent_id, ouvrage_id) VALUES (?, ?, ?, ?);
      `;
      const values = [lending_date, return_date, adherent_id, ouvrage_id];
      this.connection.execute(query, values, (err, result, fields) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result, "RESULT");
      });
    }
  
    select() {
      const query = `select * from lending;
      `;
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
      const query = `select * from lending where id = ?;
      `;
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
      const query = `SELECT * FROM lending JOIN adherent ON adherent_id = adherent.id JOIN ouvrage ON ouvrage_id = ouvrage.id WHERE ${filter} = ?;`;
      const values = [value];
      this.connection.execute(query, values, (err, result, fields) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result, "RESULT");
      });
    }
    
    update(id, lending_date, return_date, adherent_id, ouvrage_id) {
      const query = `update lending SET lending_date = ?, return_date = ?, adherent_id = ?, ouvrage_id=? WHERE id = ?;
      `;
      const values = [lending_date, return_date, adherent_id, ouvrage_id, id];
      this.connection.execute(query, values, (err, result, fields) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result, "RESULT");
      });
    }
  
    delete(id) {
      const query = `delete from lending where id = ?;
      `;
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
  