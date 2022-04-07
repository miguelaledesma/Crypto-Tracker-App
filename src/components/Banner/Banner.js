import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
    return(
        <div>
            <Container className = "bannerContent">
                <div className = "tagline">
                    <Typography
                    variant = "h2"
                    style = {{
                        fontWeight: "bold", 
                        marginBottom: 15, 
                        fontFamily: "Montserrat"
                    }}
                    >
                        Crypto Tracker 
                    </Typography>

                    <Typography
                    variant = "subtitle2"
                    style = {{
                        color: 'darkgrey', 
                        textTransform: "capitalize", 
                        fontFamily: "Montserrat"
                    }}
                    >Get all the Info regarding your favorite Crypto</Typography>

                </div>

                <Carousel /> 

            </Container>
        </div>
    )
}

export default Banner