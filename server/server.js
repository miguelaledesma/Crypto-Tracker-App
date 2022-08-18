const express = require("express");
const axios = require("axios");

const app = express();
const today = Date.now();
app.get("/news", async (req, res) => {
  try {
    const articles = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&from=2022-07-18&sortBy=popularity&apiKey=644b946eec0b49f4ba12589738e0877f`
    );
    console.log(res);
    res.send({ articles: articles.data.articles });
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server started ");
});
