export class AdherentDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(firstname, lastname, address, phone, email) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO adherent (firstname, lastname, address, phone, email) VALUES (?, ?, ?, ?, ?);
    `;
      const values = [firstname, lastname, address, phone, email];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = `select * from adherent;
    `;
      const values = [];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      const query = `select * from adherent where id = ?;
    `;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  selectFilter(filter, value) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM adherent JOIN role on adherent.role_id = role.id WHERE ${filter} = ?;`;
      const values = [value];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  update(firstname, lastname, address, phone, email, id) {
    return new Promise((resolve, reject) => {
      const query = `update adherent SET firstname = ?, lastname = ?, address = ?, phone = ?, email=? WHERE id = ?;
    `;
      const values = [firstname, lastname, address, phone, email, id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const query = `delete from adherent where id = ?;
    `;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
