const mysql = require("mysql2");
import dbconfig from "../config/database";


async function createUserTable() {
    const connection = await dbconfig
    await connection.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role ENUM('diretor', 'estudante', 'professor') DEFAULT 'estudante'
    );
  `);
    await connection.end();

}

export async function initializeDatabase(){
    await createUserTable();
    //add mais tabelas caso precise
}