var mysql = require("mysql");

var connection;

 connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port : 3307,
  database: "burgers_db"
});

//
// if(process.env.JAWSDB_URL){
//   connection=mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//   connection = mysql.createConnection({
//     host : 'wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user : 's95fvl3jw5awf7fj',
//     password : 'lbfbgmmb3t6z25td',
//     port : 3306
//   })
// }


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
