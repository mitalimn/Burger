var connection = require("../config/connection.js");

//code which queries the burger specific input 

app.get("/", function(req, res) {
  connection.query("SELECT id, burger_name FROM burgers", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("/index", { burgers: data });

  });
});

module.exports = burger;