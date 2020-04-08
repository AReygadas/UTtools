'use strict'
const mysql = require('mysql2/promise') 

const dataDB = {
  host: 'localhost',
  user: 'root',
  password: 'admin',  
  database: 'da3_db'
}

module.exports ={
   
  getUsers: async () => {
      const connection = await mysql.createConnection(dataDB)
      const [rows, fields] = await connection.execute('SELECT * FROM usuarios');
      return rows
    },
    getUser: async (root, args) => {
      const connection = await mysql.createConnection(dataDB)
      const [rows, fields] = await connection.execute(`SELECT * FROM usuarios WHERE id = ${args.id}`);
      return rows[0]
    },  
  }