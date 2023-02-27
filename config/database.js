const mysql = require('mysql2');
var connect = mysql.createConnection(
    {


        host: "containers-us-west-194.railway.app",
        database: "railway",
        user: "root",
        password: "ESXd85YpfL7zGiSX2ldS",
        port: 7797


    }
);
connect.connect((err) => {
    if (!err) {
        console.log("Database connected");
    } else {
        console.log(err);
    }
});

module.exports = connect;   