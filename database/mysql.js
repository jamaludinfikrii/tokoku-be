const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    port : 3306,
    password : "111111111",
    database : "my_commerce",
    user : "root"
})

module.exports = db