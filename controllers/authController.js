const db = require('./../database/mysql')
const login = (req,res) => {
    const data = req.body
    console.log(data)
    const sql = 'select * from users where username = ? and password = ?;'
    db.query(sql , [data.username,data.password], (err,result) => {
        try {
            if(err) throw err
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = {login}