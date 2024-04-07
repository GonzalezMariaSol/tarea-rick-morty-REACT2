import React from "react";

import { Grid, Box } from "@mui/material";
import SingleCard from "./SingleCard";

import Pagination from "@mui/material/Pagination";

const ContainCard = ({ characters, totalPages, setPagination }) => {
  const handlePageChange = (page) => {
    setPagination(page);
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
        {characters.map((character) => (
          <Grid key={character.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <SingleCard
              img={character.image}
              name={character.name}
              gender={character.gender}
              species={character.species}
              status={character.status}
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
            count={totalPages.pages}
            onChange={(event, page) => handlePageChange(page)}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ContainCard;
