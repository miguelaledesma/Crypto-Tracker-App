import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "./Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Container className="bannerContent">
        <div className="tagline">
          <Typography
            data-aos="fade"
            variant="h1"
            style={{
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "30px",
              fontFamily: "Montserrat",
              textShadow: "0.02em 0.05em #39f",
            }}
          >
            Pocket Crypto
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 50,
              marginTop: 20,
            }}
          >
            Get all the Info regarding your favorite Crypto
          </Typography>
        </div>

        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
