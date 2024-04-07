import React from "react";

import NavBar from "./NavBar";

import { createTheme } from "@mui/material/styles"; //no entiendo porque me obliga a ponerlo si no esta en uso pero sino se me rompe el codigo
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({setSearchedCharacters, setFilteredCharacters}) => {//recibo las cajas q actualizan los personajes buscados, y los filtros que se quieran aplicar. esto solo para luego pasarselo a nuestro navBar, nosotros HEADER NO lo vamos a estar utilizando como tal
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
        <NavBar setSearchedCharacters={setSearchedCharacters} setFilteredCharacters={setFilteredCharacters}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
