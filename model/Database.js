import mysql from "mysql2";

export class Database {

    connection = null

    constructor() {
        this.connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'library',
        })
    }

    stop() {
        this.connection.end()
    }

}