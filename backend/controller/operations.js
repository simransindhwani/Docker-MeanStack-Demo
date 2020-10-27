var con = require('../config/database')

const getEmailData = async function (req, res, next) {

    con.query("SELECT * FROM emailmessage", function (err, result, fields) {
        if (err) {
            res.json({ status: false, message: "Failed to load data" })
        }
        else 
        res.json({ status: true, message: result })
    })
}
const insertEmailData = async function (req, res, next) {
    console.log("req.body",req.body)
        let data = {email: req.body.email, message: req.body.message};
        let sql = "INSERT INTO emailmessage SET ?";
        let query = con.query(sql, data,(err, results) => {
          if(err) {
              res.json({ status: false, message: "Failed to Insert data" })
              throw err;
          }
          if(results.affectedRows >= 1){
              
              res.json({ status: true, message: "Successfully Inserted Values" })
          }
        });
     
}

module.exports = {
    getEmailData: getEmailData,
    insertEmailData: insertEmailData
}