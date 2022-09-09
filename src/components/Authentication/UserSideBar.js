import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { CryptoState } from "../../CryptoContext";
import Avatar from "@mui/material/Avatar";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";
import { numberWithCommas } from "../Banner/Carousel";
import "../../index.css";

export default function UserSideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const { user, setAlert, coins, watchlist, symbol } = CryptoState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLogOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout successful",
    });
    toggleDrawer();
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              cursor: "pointer",
              marginLeft: "1rem",
              backgroundColor: "lightgreen",
            }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div
              className="sideBarContainer"
              style={{
                width: 350,
                padding: 25,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontFamily: "monospace",
              }}
            >
              <div className="userInfo">
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    fontWeight: "bolder",
                    lineHeight: "1.75",
                    wordWrap: "break-word",
                  }}
                >
                  {"Dashboard for"} {user.email}
                </span>
                <div
                  className="watch-list"
                  style={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 15,
                    fontFamily: "Montserrat",
                    paddingTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    overflowY: "scroll",
                  }}
                >
                  <span style={{ fontSize: 20 }}>Watchlist</span>
                  {coins.map((coin) => {
                    if (watchlist.includes(coin.id))
                      return (
                        <div
                          style={{
                            padding: 10,
                            borderRadius: 5,
                            color: "black",
                            width: "100%",
                            display: "flex",
                            fontFamily: "Montserrat",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "white",
                            boxShadow: "0 0 3px black",
                          }}
                        >
                          <img src={coin?.image} alt={coin?.name} height="40" />
                          <span>{coin.name}</span>
                          <span style={{ display: "flex", gap: 8 }}>
                            {symbol}{" "}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                          </span>
                        </div>
                      );
                    else return <></>;
                  })}
                </div>
              </div>
              <div></div>
              <Button
                className="logout-btn"
                style={{
                  height: "8%",
                  width: "100%",
                  marginTop: 20,
                }}
                variant="contained"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
