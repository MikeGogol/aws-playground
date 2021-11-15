const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
require("./database");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});

console.log(process.env.TEST_VARIABLE);

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ msg: "Hello new backend bitches + " + process.env.TEST_VARIABLE });
});

app.get("/health", (req, res) => {
  return res.status(200).json({ health: "ok" });
});
