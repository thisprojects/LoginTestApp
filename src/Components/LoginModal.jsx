import * as React from "react";
import { useState, useRef } from "react";
import { Button, Box, Typography, Modal, TextField } from "@mui/material";

const LoginModal = ({
  loginBoxState,
  toggleLoginBoxState,
  setUserLoggedIn,
}) => {
  const emailRef = useRef();
  const passwdRef = useRef();
  const [loginError, setLoginError] = useState(false);

  const login = () => {
    const emailIsValid =
      emailRef?.current?.value &&
      emailRef?.current?.value.length > 0 &&
      emailRef?.current?.value.includes("testlogin@atest.com");

    const pWordIsValid =
      passwdRef?.current?.value &&
      passwdRef?.current?.value?.length > 0 &&
      passwdRef.current.value.includes("password1");

    if (emailIsValid && pWordIsValid) {
      toggleLoginBoxState((state) => !state);
      setUserLoggedIn(true);
    } else {
      setLoginError(true);
    }
  };

  return (
    <Modal
      open={loginBoxState}
      onClose={() => {
        toggleLoginBoxState((state) => !state);
        setLoginError(false);
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: "auto",
          width: "1000px",
          height: "500px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "10px",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Typography id="login-modal" variant="h6" component="div">
          Log In
        </Typography>
        <TextField
          id="email"
          inputRef={emailRef}
          required
          label="Email"
          sx={{ width: "50%" }}
        />
        <TextField
          id="password"
          inputRef={passwdRef}
          required
          label="Password"
          sx={{ width: "50%" }}
        />
        <Button variant="contained" id="submit" onClick={login}>
          Submit
        </Button>
        <Box sx={{ height: "20px" }}>
          {loginError && (
            <Typography
              id="error"
              variant="h6"
              component="div"
              sx={{ color: "red" }}
            >
              Bad Email or Password
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
