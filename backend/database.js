const Sequelize = require("sequelize");

const databaseName = process.env.DB_NAME;
const databaseUser = process.env.DB_USER;
const databasePassword = process.env.DB_PASSWORD;
const databaseHost = process.env.DB_HOST;

console.log("test baza", process.env.TEST_VARIABLE);

const database = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    ssl: "Amazon RDS",
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  logging: console.log,
});

async function tryConnection() {
  /* eslint-disable */
  try {
    console.log("rds", process.env.RDS_USERNAME);
    await database.authenticate();
    console.log("Connection with database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  /* eslint-enable */
}

tryConnection();
module.export = database;
