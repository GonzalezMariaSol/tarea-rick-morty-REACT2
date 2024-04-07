import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const NavBar = () => {
  return (
    <Box style={{display:"flex", justifyContent: "space-between"}}>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "black", color: "white"}}>Death</Button>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "green", color: "white"}}>Alive</Button>
      <Button variant="outlined" sx={{marginRight: "3vh", backgroundColor: "purple", color: "white"}}>Unknown</Button>
      <Box sx={{ marginRight: "3vh", border: "1px solid black", borderRadius:"5px" }}>
        <InputBase
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
