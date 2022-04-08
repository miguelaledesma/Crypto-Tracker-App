import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { Link } from "react-router-dom";
import { CircularProgress, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";



const CoinsTable = () => {
 
    const [coins, setCoins] = useState([]); 
    const [loading, setLoading ] = useState(false);
    const { currency } = CryptoState()
    const [search, setSearch] = useState()
    
    const fetchAllCoins = async() => {
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoins(data)

        setLoading(false)
    } 
    console.log(coins)

    useEffect(()=>{
        fetchAllCoins()
    },[currency])


    const handleSearch = () => {
        return coins.filter((coin) => 
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        )
    }


    return (

        <Container>
            <Typography>
                Cryptocurrency by Market Cap 
            </Typography>

            <TextField label= "Search Crypto" variant = "outlined" onChange = {(e) => setSearch(e.target.value)} /> 

            <TableContainer>
                {
                    loading ? (
                        <CircularProgress color="secondary" /> 
                    ) : (
                        <Table>
                            <TableHead>
                                <TableRow style ={{color:"white"}} >
                                    {["Coin", "Price", "24HR Change", "Market Cap"].map((head) => (
                                        <TableCell key = {head} style ={{color:"white"}} >
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
                                            <TableCell component = 'th' scope = 'row' style = {{display: 'flex', gap: '15'}} >
                                                
                                                <img 
                                                src = {row.image}
                                                alt = {row.name}
                                                height = '50'
                                                 /> 

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