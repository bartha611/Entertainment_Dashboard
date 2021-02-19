// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URI,
  pool: {
    max: 7,
    min: 0
  }
};
