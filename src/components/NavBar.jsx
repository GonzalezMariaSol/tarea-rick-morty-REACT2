import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';


const NavBar = ({setSearchedCharacters, setFilteredCharacters }) => {//recibo las cajas q van a estar actualizando a los personajes buscados y los filtros que se quieran aplicar

  const handleStatus = (status) => { //se ocupa de capturar el tipo de filtro que se paso 
    setFilteredCharacters(status); //se lo pasamos a nuestra caja que va a actualizar al nuevo filtro elegido
  }

  const handleSearch = (e) => { //se ocupa de capturar el evento del input
    const value = e.target.value; //lo desglosamos hasta obtener el valor (cada caracter q se va a estar cargando)
    setSearchedCharacters(value); //lo pasamos a nuestra caja que se va a actualizar x cada caracter cargado para ir buscando coincidencia
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
