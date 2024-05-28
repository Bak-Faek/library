export class AdherentDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(firstname, lastname, address, phone, email) {
    const query = `INSERT INTO adherent (firstname, lastname, address, phone, email) VALUES (?, ?, ?, ?, ?);
    `;
    const values = [firstname, lastname, address, phone, email];
    this.connection.execute(query, values, (err, result, fields) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  read() {
    const query = `select * from adherent;
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

  readById(id) {
    const query = `select * from adherent where id = ?;
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
    const query = `SELECT * FROM adherent WHERE ${filter} = ?;`;
    const values = [value];
    this.connection.execute(query, values, (err, result, fields) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  update(id, firstname, lastname, address, phone, email) {
    const query = `update adherent SET firstname = ?, lastname = ?, address = ?, phone = ?, email=? WHERE id = ?;
    `;
    const values = [firstname, lastname, address, phone, email, id];
    this.connection.execute(query, values, (err, result, fields) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  delete(id) {
    const query = `delete from adherent where id = ?;
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
