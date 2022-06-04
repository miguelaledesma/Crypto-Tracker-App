
import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { CircularProgress, Container, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { numberWithCommas } from "./Banner/Carousel";
import { useNavigate } from "react-router-dom";





const CoinsTable = () => {
 
    const { currency, symbol, coins, loading, fetchAllCoins } = CryptoState()
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const history = useNavigate()
    

    
    // console.log(coins)

    useEffect(()=>{
        fetchAllCoins()
    },[currency])


    const handleSearch = () => {
        return coins.filter((coin) => 
            coin?.name.includes(search) || coin.symbol.includes(search) || coin?.id.includes(search)
        )
    }


    return (

        <Container style = {{textAlign: 'center'}}>
            <Typography style = {{
                        fontWeight: 400, 
                        marginBottom: 15,
                        marginTop: 20,  
                        fontFamily: "Montserrat",
                        color: "darkgrey"
                    }}>
                Cryptocurrency by Market Cap 
            </Typography>

            <TextField 
            fullWidth 
            label="Search Crypto"
            variant = "outlined" 
            inputProps={{ style: { color: "white" } }}
            color = 'primary'
            focused
            
            
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
                                        align = {head === "Coin" ? " " : "right"}
                                        >
                                        {head}
                                        </TableCell>
                                    ) )}
                                    
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    handleSearch()
                                    .slice((page - 1) * 10, (page - 1)* 10 + 10 )
                                    .map(row => {
                                        const percentChange = row.price_change_percentage_24h > 0; 
                                        return( 
                                        <TableRow
                                         key = {row.name}
                                         onClick ={() => history(`/coins/${row.id}`)}
                                        
                                         style ={{cursor: "pointer"}} >
                                            
                                            <TableCell component = 'th' scope = 'row' style = {{display: 'flex', gap: 15}} >
                                                
                                                <img 
                                                src = {row.image}
                                                alt = {row.name}
                                                height = "50"
                                                style = {{marginBottom: 10}}
                                                 /> 
                                                 <div className = "coinRow"> 
                                                    <span style = {{textTransform: "uppercase", fontSize: 20, color: "white", fontFamily: "Montserrat"}} >{row.symbol}</span>
                                                    <span style ={{color: 'white',fontFamily: "Montserrat"}}>{row.name}</span>
                                                 </div> 

                                            </TableCell>
                                            

                                            <TableCell style = {{color: 'white', fontFamily: 'Montserrat'}} align = "right"> 
                                            {symbol}{""}{numberWithCommas(row.current_price.toFixed(2))} 
                                            </TableCell>


                                            <TableCell align = "right" key = {row.name} style = {{color: percentChange > 0 ? "green" : "red", fontFamily: 'Montserrat'}} >
                                            {percentChange && "+"} {row?.price_change_percentage_24h?.toFixed(2)}%
                                            </TableCell>

                                           <TableCell align = "right" style = {{color: 'white', fontFamily: 'Montserrat'}}>
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
            
            <Pagination
            count = {(handleSearch()?.length /10).toFixed(0)}
            variant = 'outlined'
            onChange = {(_, value) => {
                setPage(value); 
                window.scroll(0,450)
            }}
            /> 
        </Container>
        
    )
}

export default CoinsTable 