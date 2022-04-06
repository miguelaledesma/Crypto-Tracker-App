import React from "react";
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import {  useNavigate } from "react-router";




const Header = () => {

    const history = useNavigate()


    return(
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
                         margin: 15
                     }}
                     >
                        <MenuItem value = {'USD'}>USD</MenuItem>
                        <MenuItem value = {'EUR'}>EUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
             
        </AppBar>
    )
}

export default Header