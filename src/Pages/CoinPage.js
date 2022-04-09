import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import { Typography } from "@mui/material";


const CoinPage = () => {
    
    const { id }= useParams(); 
    const [ coin, setCoin] = useState(); 
    const { symbol, currency } = CryptoState()    
    const {loading, setLoading } = useState(false)

    const fetchSingleCoin = async() => {
       
        const {data} = await axios.get(SingleCoin(id))
        setCoin(data)
    }
    console.log(coin)

    useEffect(() => {
        fetchSingleCoin()
    }, [])

    
    return(
        <div className = "coinPageContainer">
            <div className = "sideBar"> 
                <img 
                src = {coin?.image.large}
                alt = {coin?.name}
                height = "200"
                style = {{marginBottom: 20}}
                
                /> 
                <Typography className = "coinHeading">
                    {coin?.name}
                </Typography>

                <Typography 
                variant="subtitle2" 
                className = "coinDescription">
                    { coin?.description.en.split(". ")}
                </Typography>

            </div>
            <CoinInfo coin = {coin} /> 
            
        </div>
    )
}

export default CoinPage