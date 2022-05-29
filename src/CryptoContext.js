import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "./config/api";


const Crypto = createContext()

const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("USD")
    const [symbol, setSymbol] = useState("$")
    const [coins, setCoins] = useState([]); 
    const [loading, setLoading ] = useState(false);
    
    const fetchAllCoins = async() => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoins(data)

        setLoading(false)
    } 

    useEffect(() => {
        if(currency === "USD") setSymbol("$")
        else if(currency === 'EUR') setSymbol("€")
    }, [currency])

    return(
        <Crypto.Provider value = {{currency, symbol, setCurrency, coins, loading, fetchAllCoins}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState = () => {
   return  useContext(Crypto)
}