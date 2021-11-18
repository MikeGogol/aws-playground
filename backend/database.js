const Sequelize = require("sequelize");

const databaseName = process.env.RDS_DB_NAME;
const databaseUser = process.env.RDS_USERNAME;
const databasePassword = process.env.RDS_PASSWORD;
const databaseHost = process.env.RDS_DB_HOSTNAME;

console.log("test baza", process.env.TEST_VARIABLE);

const database = new Sequelize(databaseName, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
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
