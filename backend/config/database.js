var mysql = require('mysql')

var con = mysql.createConnection({
	host: "database-1.cthrmxaujw5z.us-east-1.rds.amazonaws.com",
	user: "admin",
    password: "admin12345",
    database:"emailapp",
    multipleStatements:true
	
});
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

module.exports = con
