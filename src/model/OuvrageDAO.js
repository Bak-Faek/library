const AbstractManager = require("./AbstractManager");

class OuvrageDAO extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "recipe" as configuration
    super({ table: "ouvrage" });
  }

  async create(name, author, publication_date, category_id) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}  (name, author, publication_date, category_id) VALUES (?, ?, ?, ?)`,
      [name, author, publication_date, category_id]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async read() {
    // Execute the SQL SELECT query to retrieve all items from the "recipe" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of recipes
    return rows;
  }

  async readById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readByField(field, value) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ouvrage JOIN category ON category_id = category.id WHERE ${field} = ?;`,
      [value]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

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

  async delete(recipeId) {
    await this.database.query(`delete from ${this.table} where id=?`, [
      recipeId,
    ]);
  }

  async update(id, name, author, publication_date, category_id) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `update ouvrage SET name = ?, author = ?, publication_date = ?, category_id=? WHERE id = ?`,
      [name, author, publication_date, category_id, id]
    );

    // Return the ID of the newly inserted item
    return result;
  }
}

module.exports = OuvrageDAO;
