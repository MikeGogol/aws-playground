const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello bitches" });
});

app.get("/healt", (req, res) => {
  return res.status(200).json({ health: "ok" });
});
