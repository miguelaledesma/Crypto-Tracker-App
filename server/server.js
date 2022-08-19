const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(express.static("build"));

const today = Date.now();

app.use("/", (req, res) => {
  return res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/news", cors(), async (req, res) => {
  try {
    const articles = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&from=${today}&sortBy=popularity&apiKey=644b946eec0b49f4ba12589738e0877f`
    );

    res.send({ articles: articles.data.articles });
    // console.log(articles);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server started ");
});
