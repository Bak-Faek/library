import mysql from "mysql2";

export class Database {

    connection = null

    constructor() {
        this.connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'Banokfaek1989+',
          database: 'library',
        })
        console.log(`I am using ${this.connection.config.database}` );
    }

    // stop() {
    //     this.connection.end()
    // }
}