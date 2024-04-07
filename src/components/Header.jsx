import React from "react";

import NavBar from "./NavBar";
import { createTheme } from "@mui/material/styles";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgb(176, 176, 176)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Rick & Morty APP
        </Typography>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
