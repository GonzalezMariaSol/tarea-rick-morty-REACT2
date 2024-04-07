import React from "react";

import NavBar from "./NavBar";
import { createTheme } from "@mui/material/styles";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({setSearchedCharacters, characters, setFilteredCharacters}) => {
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
        <NavBar setSearchedCharacters={setSearchedCharacters} characters={characters} setFilteredCharacters={setFilteredCharacters}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
