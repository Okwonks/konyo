const pg = require('pg');

// TODO add the connection details here
module.exports = new pg.Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: '',
});
