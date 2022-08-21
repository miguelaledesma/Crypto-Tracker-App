import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItems";
import Container from "@mui/material/Container";
import { Pagination, LinearProgress, Typography } from "@mui/material";

const CryptoNews = () => {
  const [articles, setArticles] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://miguel-news-server.herokuapp.com/news`
      );

      setArticles(res.data.articles);
    };
    fetchData();
  }, []);

  if (!articles) {
    return <LinearProgress style={{ backgroundColor: "#0c3c4c" }} />;
  }

  return (
    <Container maxWidth="md" className="news-items">
      {
        <Typography
          variant="h2"
          style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
        >
          Explore Crypto News!
        </Typography>
      }
      {articles
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map(({ title, description, url, urlToImage }) => {
          return (
            <NewsItem
              key={articles.id}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
            />
          );
        })}
      <Pagination
        style={{ WebkitTextFillColor: "white" }}
        color="primary"
        count={(articles.length / 25).toFixed(0)}
        variant="outlined"
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
};

export default CryptoNews;
