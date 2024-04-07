import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const SingleCard = ({ img, name, gender, species, status }) => { //recibimos del personaje, la img, nombre, genero, especie y estado
  return (
    <Card
      sx={{
        width: "45vh",
        height: "max-content",
        maxWidth: 345,
        boxShadow: "0 4px 8px #b0b0b0",
        marginTop: "5vh"
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={img} //insertamos el link img q nos llega como prop
        alt="Image"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> 
          {name}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            <b>Gender:</b> {gender} 
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            <b>Species:</b> {species}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            <b>Status:</b> {status}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SingleCard;
