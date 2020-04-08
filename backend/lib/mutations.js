'use strict'

const mysql = require('mysql2/promise') 

const dataDB = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'da3_db'
}

module.exports ={
 
    createUser: async (root, {input} ) => {
      try {
    const connection = mysql.createConnection(dataDB)
    await connection.query( "insert into usuarios SET ?", input).then(data => data)
    return data
  } catch (error) {
    
  }
}

}
