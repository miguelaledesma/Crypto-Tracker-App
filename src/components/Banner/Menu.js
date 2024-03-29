import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AuthModal from "../Authentication/AuthModal";
import LoginIcon from "@mui/icons-material/Login";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import About from "../../Pages/About";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Menus() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useNavigate();

  return (
    <div>
      <Button
        id="menu-button"
        aria-controls={open ? "menu-option" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{ fontFamily: "Montserrat", fontWeight: "600" }}
      >
        Menu
      </Button>
      <StyledMenu
        id="menu-option"
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => history("/")}
          disableRipple
          style={{ color: "black", fontFamily: "Montserrat" }}
        >
          <LoginIcon />
          {/* <AuthModal /> */}
          Home
        </MenuItem>
        <Link to="/about">
          <MenuItem
            onClick={handleClose}
            style={{ color: "black", fontFamily: "Montserrat" }}
            disableRipple
          >
            <CurrencyBitcoinIcon />
            About
          </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link to="/news">
          <MenuItem
            onClick={handleClose}
            disableRipple
            style={{ color: "black", fontFamily: "Montserrat" }}
          >
            <NewspaperIcon />
            Crypto News
          </MenuItem>
        </Link>
        <MenuItem
          onClick={handleClose}
          style={{ fontFamily: "Montserrat", color: "black" }}
          disableRipple
        >
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
