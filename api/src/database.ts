const Pool = require("pg").Pool

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "CP3"
});

module.exports = pool;