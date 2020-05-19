const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    port : 3306,
    password : "ganafgan1994",
    database : "commerce",
    user : "root"
})

module.exports = db