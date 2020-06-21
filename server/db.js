const Pool = require('pg').Pool;
const pool= new Pool({
    user:"postgres",
    password:"Siekierson",
    host:"localhost",
    port:5432,
    database:"feeed"
})
module.exports=pool;