import { fontFamily } from "@mui/material/node_modules/@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let percentChange = coin.price_change_percentage_24h >= 0;

    return (
      <Link className="carouselItem" to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />

        <span style={{ fontFamily: "Montserrat" }}>
          {" "}
          {coin?.symbol} &nbsp;
          <span
            style={{
              color: percentChange > 0 ? "green" : "red",
              fontFamily: "Montserrat",
            }}
          >
            {percentChange && "+"}{" "}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>

        <span
          style={{ fontWeight: "800", fontSize: 20, fontFamily: "Montserrat" }}
        >
          {symbol}
          {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls
        items={items}
      />
    </div>
  );
};

export default Carousel;
