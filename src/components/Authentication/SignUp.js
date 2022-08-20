import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAlert } = CryptoState();

  // const handleEmail = (e) => {
  //   return setEmail(e.target.value);
  // };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: " Passwords do not match, try again! ",
        type: "error",
      });
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(result);
      setAlert({
        open: true,
        message: `Success! Welcome ${result.user.email}!`,
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <Box p={3}>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontFamily: "Montserrat",
        }}
      >
        Create an Account
      </Typography>
      <TextField
        className="standard-email-input"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="current-email"
        variant="standard"
        fullWidth
        required
        sx={{ marginTop: ".5rem" }}
      />

      <TextField
        className="standard-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        variant="standard"
        fullWidth
        required
      />
      <TextField
        className="standard-confirm-input"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        autoComplete="current-password"
        variant="standard"
        fullWidth
        required
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          color: "white",
          backgroundColor: "#5C527F",
          padding: "1rem",
          marginTop: "1rem",
          fontFamily: "Montserrat",
          "&:hover": {
            backgroundColor: "lightgreen",
            fontWeight: "800",
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
