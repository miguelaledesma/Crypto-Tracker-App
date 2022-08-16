import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CryptoState } from "../../CryptoContext";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = CryptoState();
  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill out the fields",
        type: "error",
      });
      return;
    }
    try {
      const loginResult = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        open: true,
        message: `Login Successful! Welcome ${loginResult.user.email}!`,
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };
  return (
    <Box>
      <TextField
        className="standard-email-input"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="current-email"
        variant="standard"
        fullWidth
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
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
