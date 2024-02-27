const fs = require ("fs")
const db = require("./postgres.db")

const sql = fs.readFileSync(process.cwd() + '/application/database/config.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log("Set-up complete.");
    })
    .catch(error => console.log(error));