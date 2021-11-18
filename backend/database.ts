import { Sequelize } from "sequelize";

const databaseName = process.env.RDS_DB_NAME as string;
const databaseUser = process.env.RDS_USERNAME as string;
const databasePassword = process.env.RDS_PASSWORD as string;
const databaseHost = process.env.DB_HOST as string;

console.log("test baza", process.env.RDS_PASSWORD);

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
  // pool: { maxConnections: 5, maxIdleTime: 30 },
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
export default database;
