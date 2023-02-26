const mysql = require('mysql2');
var connect = mysql.createConnection(
    {
    
       
        host: "localhost",
        database: "sampleapi",
        user: "root",
        password: "",
        port: 3306
       
        
    }
);
connect.connect((err)=>{
    if (!err) {
        console.log("Database connected");
    }else{
        console.log(err);
    }
});

module.exports = connect;   