import React from "react";
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import {  useNavigate } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";
import { CryptoState } from "../CryptoContext";



const Header = () => {

    const history = useNavigate()
    const { currency, setCurrency } = CryptoState()
    

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: '#fff'
            }, 
            type: 'dark'
        }
    })


    return(
        <ThemeProvider theme ={darkTheme} >
        <AppBar color = 'transparent' position = 'static'>
            <Container>
                <Toolbar>
                    <Typography 
                    onClick = {() => history('/')} 
                    className = "title" 
                    style = {{fontFamily: 'Montserrat', fontWeight: 'bold' }}
                    >Crypto Tracker</Typography>

                    <Select variant = "outlined"
                     style = {{
                         width: 100, 
                         height: 40,
                         marginRight: 15,
                         color: 'white'
                         
                     }}

                     value = { currency }
                     onChange = {(e) => setCurrency(e.target.value)}
                     >
                        <MenuItem value ={"USD"}>USD</MenuItem>
                        <MenuItem value ={"EUR"}>EUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
             
        </AppBar>
        </ThemeProvider>
    )
}

export default Header