export class OuvrageDAO {
  constructor(db /* CLASS DATABASE */) {
    //this.db = db;
    this.connection = db.connection;
  }

  create(name, author, publication_date, category_id) {
    const query = `INSERT INTO ouvrage (name, author, publication_date, category_id) VALUES (?, ?, ?, ?);
    `;
    const values = [name, author, publication_date, category_id];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  read() {
    const query = `select * from ouvrage;`;
    const values = [];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  selectById(id) {
    const query = `select * from ouvrage where id = ?;
    `;
    const values = [id];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  selectByField(field, value) {
    const query = `SELECT * FROM ouvrage JOIN category ON category_id = category.id WHERE ${field} = ?;`;
    const values = [value];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  update(id, name, author, publication_date, category_id) {
    const query = `update ouvrage SET name = ?, author = ?, publication_date = ?, category_id=? WHERE id = ?;
    `;
    const values = [name, author, publication_date, category_id, id];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }

  delete(id) {
    const query = `delete from ouvrage where id = ?;
    `;
    const values = [id];
    this.connection.execute(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result, "RESULT");
    });
  }
}
