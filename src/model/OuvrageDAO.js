const AbstractManager = require("./AbstractManager");

class OuvrageDAO extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "ouvrage" });
  }

  // create(name, author, publication_date, category_id) {
  //   const query = `INSERT INTO ${this.table}  (name, author, publication_date, category_id) VALUES (?, ?, ?, ?);
  //   `;
  //   const values = [name, author, publication_date, category_id];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }

  // read() {
  //   const query = `select * from ${this.table} ;`;
  //   const values = [];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }

  async read() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  // selectById(id) {
  //   const query = `select * from ouvrage where id = ?;
  //   `;
  //   const values = [id];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }

  // selectByField(field, value) {
  //   const query = `SELECT * FROM ouvrage JOIN category ON category_id = category.id WHERE ${field} = ?;`;
  //   const values = [value];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }

  // update(id, name, author, publication_date, category_id) {
  //   const query = `update ouvrage SET name = ?, author = ?, publication_date = ?, category_id=? WHERE id = ?;
  //   `;
  //   const values = [name, author, publication_date, category_id, id];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }

  // delete(id) {
  //   const query = `delete from ouvrage where id = ?;
  //   `;
  //   const values = [id];
  //   this.connection.execute(query, values, (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(result, "RESULT");
  //   });
  // }
}

module.exports = OuvrageDAO;
