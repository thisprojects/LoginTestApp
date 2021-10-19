import * as React from "react";
import { Button, Box, Toolbar, Typography, AppBar } from "@mui/material";

// This navigation menu is based on the following example https://mui.com/components/app-bar/#main-content
const Navigation = ({ toggleLoginBoxState }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Login Test App
        </Typography>
        <Button
          onClick={() => toggleLoginBoxState((state) => !state)}
          color="inherit"
        >
          <span id="login-button">Login</span>
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navigation;
