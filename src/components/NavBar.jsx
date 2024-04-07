import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
// import { useState } from "react";

const NavBar = ({setSearchedCharacters, setFilteredCharacters, characters }) => {

  // const [searchValue, setSearchValue] = useState("");

  const handleStatus = (status) => {

    setFilteredCharacters(status);
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchedCharacters(value); //GUARDO MI VALOR BUSCADO
    // console.log("soy el valor que captura el handlesearch del componente navbar",value);
    }

  return (
    <Box style={{display:"flex", justifyContent: "space-between"}}>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "black", color: "white"}} onClick={()=>handleStatus("dead")}>Death</Button>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "green", color: "white"}} onClick={()=>handleStatus("alive")}>Alive</Button>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "purple", color: "white"}} onClick={()=>handleStatus("unknown")}>Unknown</Button>
      <Box sx={{ marginRight: "3vh", border: "1px solid black", borderRadius:"5px" }}>
        <InputBase
        onChange={handleSearch}
        sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default NavBar;
