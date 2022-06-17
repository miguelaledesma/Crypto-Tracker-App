import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const handleEmail = (e) => {
  //     return setEmail(e.target.value);
  //   };

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
      <TextField
        className="standard-confirm-input"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        autoComplete="current-password"
        variant="standard"
        fullWidth
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          color: "white",
          backgroundColor: "#5C527F",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
