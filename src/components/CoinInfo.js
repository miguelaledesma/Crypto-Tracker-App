import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { CircularProgress } from "@mui/material";

const CoinInfo = ({coin}) => {
    const [historicalData, setHistoricalData] = useState()
    const [days, setDays] = useState(1)
    const { currency, symbol } = CryptoState()

    const fetchHistoricalData = async () => {
        const {data} = axios.get(HistoricalChart(coin.id, days, currency))
        setHistoricalData(data.prices)
    }

    useEffect(() => {
        fetchHistoricalData()
    },[currency, days])


    return (
        <div className = 'chartContainer'>
             {
              !historicalData ? (
                <CircularProgress size = {150} style ={{color: 'blue'}} thickness = {1}/>
            ): (<></>)
             }

        </div>
    )
}

export default CoinInfo; 