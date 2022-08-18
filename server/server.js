const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json();
});

app.listen(3001, () => {
  console.log("server started ");
});
