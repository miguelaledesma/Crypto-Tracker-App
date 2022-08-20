import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";
import { CryptoState } from "../CryptoContext";
import HomeIcon from "@mui/icons-material/Home";
import AuthModal from "./Authentication/AuthModal";
import UserSideBar from "./Authentication/UserSideBar";

import Menus from "./Banner/Menu";

const Header = () => {
  // const history = useNavigate();
  const { currency, setCurrency, user } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static" sx={{ bgcolor: "#5C527F" }}>
        <Container>
          <Toolbar>
            <Typography
              className="title"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {" "}
            </Typography>

            <Select
              className="selectDrop"
              variant="outlined"
              sx={{ borderColor: "white" }}
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
            <Menus />
            {user ? <UserSideBar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
