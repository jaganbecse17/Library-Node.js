const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'auth',
  database: 'api',
  password: 'password',
  port: 5432,
})

export default pool