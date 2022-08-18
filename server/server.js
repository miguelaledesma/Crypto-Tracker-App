const express = require("express");
const axios = require("axios");

const app = express();
const today = Date.now();
app.get("/news", async (req, res) => {
  const articles = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&from=${today}&sortBy=popularity&apiKey=644b946eec0b49f4ba12589738e0877f`
  );
  res.send({ articles: articles.data.articles });
});

app.listen(3001, () => {
  console.log("server started ");
});
