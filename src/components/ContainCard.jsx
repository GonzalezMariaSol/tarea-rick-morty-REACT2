import React from "react";

import { Grid, Box } from "@mui/material";
import SingleCard from "./SingleCard";

import Pagination from "@mui/material/Pagination";

const ContainCard = ({ characters, totalPages, setPagination }) => {//recibo info de todos los personajes y la info sobre las paginas + la caja que se encarga de actualizar la info sobre la paginacion elegida

  const handlePageChange = (page) => {//recibo el numero seleccionado de pagina
    setPagination(page);//le digo a la caja que actualice el numero seleccionado al nuevo elegido
  };

  return (
    <div>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "rgb(239, 239, 239)",
          margin: "auto",
          maxWidth: "fit-content",
        }}
      >
        {characters.map((character) => ( //hacemos uso de TODOS los personajes que recibimos y vamos a crear una singleCard x cada personaje
          <Grid key={character.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <SingleCard //a la carta individual de cda uno pasamos x prop
              img={character.image}  //la img del personaje
              name={character.name} //el nombre del personaje
              gender={character.gender} //el genero 
              species={character.species} //la especio
              status={character.status} //y su estado
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(239, 239, 239)",
        }}
      >
        <Box sx={{ marginTop: "10vh" }}>
          <Pagination
            count={totalPages.pages}//hacemos uso de la info sobre la paginas y le decimos q nos muestre el total de paginas q tiene la api
            onChange={(event, page) => handlePageChange(page)} //lo hago asi porque necesito el evento, para luego capturar la pgina, sin el evento, page no me devuelve el numero que necesito
          />
        </Box>
      </Box>
    </div>
  );
};

export default ContainCard;
