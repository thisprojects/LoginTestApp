import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Navigation from "./Components/Navigation";
import LoginModal from "./Components/LoginModal";

const UserSection = ({ userLoggedIn }) =>
  userLoggedIn ? <h4 id="user-section">Logged in user: testlogin</h4> : <h4 id="welcome">Welcome, Log In To Continue</h4>;

const LoginTestApp = () => {
  const [loginBoxState, toggleLoginBoxState] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div>
      <Navigation toggleLoginBoxState={toggleLoginBoxState} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <UserSection userLoggedIn={userLoggedIn} />
      </Box>
      <LoginModal
        loginBoxState={loginBoxState}
        toggleLoginBoxState={toggleLoginBoxState}
        setUserLoggedIn={setUserLoggedIn}
      />
    </div>
  );
};

export default LoginTestApp;
