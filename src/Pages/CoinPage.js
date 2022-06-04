import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import { Accordion, LinearProgress, Typography } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import { numberWithCommas } from "../components/Banner/Carousel";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Expand } from "@mui/icons-material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { symbol, currency } = CryptoState();

  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  // console.log(coin)

  useEffect(() => {
    fetchSingleCoin();
  }, []);

  if (!coin) {
    return <LinearProgress style={{ backgroundColor: "#0c3c4c" }} />;
  }

  return (
    <div className="coinPageContainer">
      <div className="sideBar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />

        <Typography
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 50,
          }}
          className="coinHeading"
        >
          {coin?.name}
        </Typography>

        <Accordion
          className="accordian"
          style={{ backgroundColor: "#14161a", color: "white" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              Expand Coin Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{ fontFamily: "Montserrat", align: "center" }}
              variant="subtitle2"
              className="coinDescription"
            >
              {HTMLReactParser(`${coin?.description.en.split(" .")[0]}`)}
            </Typography>
            {/* <Typography>
            
          </Typography> */}
          </AccordionDetails>
        </Accordion>

        {/* <Typography 
                style = {{fontFamily: "Montserrat", align: "center"}}
                variant="subtitle2" 
                className = "coinDescription" >
                    {HTMLReactParser(`${coin?.description.en.split(" .")[0]}`)}
                </Typography> */}

        <div className="marketData">
          <span style={{ display: "flex" }}>
            <Typography
              className="rank"
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              className="rankMarket"
              style={{ color: "white", fontFamily: "Montserrat" }}
            >
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography
              className="currentPrice"
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              className="coinInfoPrice"
              style={{ color: "white", fontFamily: "Montserrat" }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
                  .toString()
                  .slice(0)
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography style={{ color: "white", fontFamily: "Montserrat" }}>
              {symbol}
              {""}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0)
              )}
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
