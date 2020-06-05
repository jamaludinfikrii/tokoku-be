const db = require('./../database/mysql')
const sendNotification = require('./../helpers/sendNotif')
require('dotenv').config()

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


const register = (req,res) => {
    console.log('masuk')
    const data = req.body
    const sql = 'insert into users set ?'
    db.query(sql,data,(err,result) => {
        if(err) throw err
        res.send([{
            username : data.username,
            password : data.password,
            email:  data.email,
            id : result.insertId
        }])
    })
}

const testNotif = (request,response) => {
    console.log('masuk')

    
    var message = { 
        app_id: process.env.APP_ID_ONE_SIGNAL,
        contents: {"en": "Nikmati belanja Sepuasnya di tokoku"},
        headings : {"en" : "Promo Lebaran"},
        included_segments: ["All"]
    };
    
    sendNotification(message);
}






module.exports = {login , testNotif ,register}