import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

const Carousel = () => {

    const [trending, setTrending] = useState([])
    const { currency } = CryptoState()

    const fetchTrendingCoins = async () => {
        const {data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
        
    }; 
    console.log(trending)

    useEffect(()=>{
        fetchTrendingCoins()
    },[currency])


const items = trending.map(coin => {
    return (
        <Link className = "carouselItem" to = {`/coins/${coin.id}`}>
        <img 
        src = {coin?.image}
        alt = {coin.name}
        height = "80"
        style = {{marginBottom: 10}}
        
        /> 
        </Link>
    )
})


    const responsive = {
        0: {
            items: 2,
        }, 
        512: {
            items: 4
        }
    }; 



    return(
        <div className = "carousel"> 
        <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval = {1000}
        animationDuration = {1500}
        responsive = {responsive}
        autoPlay
        items = {items}
        /> 
        
        </div>
    )
}

export default Carousel