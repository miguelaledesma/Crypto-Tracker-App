import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CryptoState } from "../../CryptoContext";
import Avatar from "@mui/material/Avatar";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";
import "../../index.css";

export default function UserSideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const { user, setAlert } = CryptoState();

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
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.email}
                </span>
                <div
                  className="watch-list"
                  style={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "grey",
                    borderRadius: 10,
                    padding: 15,
                    paddingTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    overflowY: "scroll",
                  }}
                ></div>
              </div>
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
