const db = require('./../database/mysql')
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
    var sendNotification = function(data) {
        var headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic " + process.env.API_KEY_ONE_SIGNAL
        };
        
        var options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };
        
        var https = require('https');
        var req = https.request(options, function(res) {  
            res.on('data', function(data) {
            console.log("Response:");
            console.log(JSON.parse(data));
            });
        });
        
        req.on('error', function(e) {
            console.log("ERROR:");
            console.log(e);
        });
        
        req.write(JSON.stringify(data));
        response.send('Message sent')
        req.end();
        
    };
    
    var message = { 
        app_id: process.env.APP_ID_ONE_SIGNAL,
        contents: {"en": "Nikmati belanja Sepuasnya di tokoku"},
        headings : {"en" : "Promo Lebaran"},
        included_segments: ["All"]
    };
    
    sendNotification(message);
}






module.exports = {login , testNotif ,register}