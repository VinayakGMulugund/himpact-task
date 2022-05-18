
const mysql = require('mysql')
var db 
function dbConnect() {
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "new_password",
        database: "himpact"
    })

    db.connect((err)=>{
        if(err) console.log(err)
        else console.log('connected to db')
    })
    return db
}




module.exports = dbConnect()