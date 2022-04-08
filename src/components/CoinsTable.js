import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { CircularProgress, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { numberWithCommas } from "./Banner/Carousel";
import { Link } from "react-router-dom";





const CoinsTable = () => {
 
    const [coins, setCoins] = useState([]); 
    const [loading, setLoading ] = useState(false);
    const { currency, symbol } = CryptoState()
    const [search, setSearch] = useState()
    
    const fetchAllCoins = async() => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoins(data)

        setLoading(false)
    } 
    // console.log(coins)

    useEffect(()=>{
        fetchAllCoins()
    },[currency])


    const handleSearch = () => {
        return coins.filter((coin) => 
            coin.name.includes(search) || coin.symbol.toLowerCase().includes(search)
        )
    }


    return (

        <Container style = {{textAlign: 'center'}}>
            <Typography style = {{
                        fontWeight: 400, 
                        marginBottom: 15, 
                        fontFamily: "Montserrat"
                    }}>
                Cryptocurrency by Market Cap 
            </Typography>

            <TextField 
            fullWidth 
            label= "Search Crypto"
            variant = "outlined" 
            onChange = {(e) => setSearch(e.target.value)} 
            
            /> 

            <TableContainer>
                {
                    loading ? (
                        <CircularProgress color="secondary" /> 
                    ) : (
                        <Table>
                            <TableHead>
                                <TableRow style ={{color:"white",}} >
                                    {["Coin", "Price", "24HR Change", "Market Cap"].map((head) => (
                                        <TableCell 
                                        key ={head} 
                                        style ={{color:"white", fontFamily: "Montserrat", backgroundColor: "#0c3c4c"}}
                                        // align = {head === "Coin" ? " " : "right"}
                                        >
                                        {head}
                                        </TableCell>
                                    ) )}
                                    
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    handleSearch().map(row => {
                                        const percentChange = row.price_change_percentage_24h > 0; 
                                        return( 
                                        <TableRow key = {row.name}>
                                            <Link to = { `/coins/${row.id}`}>
                                            <TableCell component = 'th' scope = 'row' style = {{display: 'flex', gap: 15}} >
                                                
                                                <img 
                                                src = {row.image}
                                                alt = {row.name}
                                                height = "50"
                                                style = {{marginBottom: 10}}
                                                 /> 
                                                 <div className = "coinRow"> 
                                                    <span style = {{textTransform: "uppercase", fontSize: 20, color: "white"}} >{row.symbol}</span>
                                                    <span style ={{color: 'white'}}>{row.name}</span>
                                                 </div> 

                                            </TableCell>
                                            </Link>

                                            <TableCell style = {{color: 'white'}} > 
                                            {symbol}{""}{numberWithCommas(row.current_price.toFixed(2))} 
                                            </TableCell>


                                            <TableCell key = {row.name} style = {{color: percentChange > 0 ? "green" : "red"}} >
                                            {percentChange && "+"} {row?.price_change_percentage_24h?.toFixed(2)}%
                                            </TableCell>

                                           <TableCell align = "right" style = {{color: 'white'}}>
                                               {symbol}{numberWithCommas(row.market_cap.toFixed(2))}
                                           </TableCell>

                                        </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    )
                }
            
            </TableContainer> 

        </Container>
        
    )
}

export default CoinsTable 