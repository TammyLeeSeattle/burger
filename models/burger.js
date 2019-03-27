var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) { // calling orm.all function, passing in values from table
            cb(res);
        })
    }
}; // end of var burger

module.exports = burger;

15:31