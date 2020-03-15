const orm = require("../config/orm.js");

var burger = {
  selectAll: function() {
    orm.selectAll("burgers", function(res) {
      return res;
    });
  },
  selectOne: function() {
    orm.selectOne("burgers", function(res) {
      return res;
    });
  },
  updateOne: function() {
    orm.updateOne("burgers", function(res) {
      return res;
    });
  }
};

module.exports = burger;