const db = require('./../database/mysql')
const login = (req,res) => {
    const data = req.body
    const sql = 'select * from users where username = ? and password = ?;'
    db.query(sql , [data.username,data.password], (err,result) => {
        try {
            if(err) throw err
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = {login}