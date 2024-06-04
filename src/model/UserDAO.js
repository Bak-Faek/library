import bcrypt, { hash } from "bcrypt";

export class UserDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(firstname, lastname, address, phone, email, password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10).then((passwordHash) => {
        const query = `INSERT INTO user (firstname, lastname, address, phone, email, password) VALUES (?,?,?,?,?,?);`;
        const values = [
          firstname,
          lastname,
          address,
          phone,
          email,
          passwordHash,
        ];
        this.connection.execute(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      const query = `select * from user where email = ?;
    `;
      const values = [email];
      this.connection.execute(query, values, (err, result) => {
        if (err) return reject(err);
        const hashPassword = result[0].password;
        console.log(result[0].id);
        bcrypt.compare(password, hashPassword).then((isValid) => {
          resolve({ isAuthentificated: isValid, userID: result[0].id });
        });
      });
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      const query = `select * from user;
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
      const query = `select id, firstname, lastname, email from user where id = ?;
    `;
      const values = [id];
      this.connection.execute(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
      });
    });
  }

  selectFilter(filter, value) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM user JOIN role on adherent.role_id = role.id WHERE ${filter} = ?;`;
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

  update(firstname, lastname, address, phone, email, password, id) {
    return new Promise((resolve, reject) => {
      const query = `update user SET firstname = ?, lastname = ?, address = ?, phone = ?, email=?, password=? WHERE id = ?;
    `;
      const values = [firstname, lastname, address, phone, email, password, id];
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
      const query = `delete from user where id = ?;
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
