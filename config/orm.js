var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      return result;
    });
  },
  selectOne: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      return result;
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
    connection.query(queryString, [table, objColVals, condition, cb], function(err, result) {
      if (err) throw err;
      return result;
    });
  }
};

module.exports = orm;