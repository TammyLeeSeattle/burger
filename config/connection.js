// this is all about mysql connection

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "PoopaSQL!",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to MySQL! Connected as ID: " + connection.threadId);
});

// export connection to ORM
module.exports = connection;