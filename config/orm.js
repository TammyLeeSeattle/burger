var connection = require("./connection.js");

// get all the info in the db
var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
            if (err) throw err;
            cb(result) // export the result into the next function
        }); // end of connection.query
    }
}; // end of var orm

module.exports = orm;