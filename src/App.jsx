import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ContainCard from "./components/ContainCard";

const App = () => {
  const [characters, setCharacters] = useState([]); //guarda un array de obj con los primeros 20 personajes y toda su info
  const [totalPages, setTotalPages] = useState([]); //guarda un arr de obj q siempre es el mismo sobre cuantas hojas totales tiene la api
  const [pagination, setPagination] = useState(); //guarda solo un numero para luego reutilizarlo de quererlo
  const [filteredCharacters, setFilteredCharacters] = useState(); //guarda solo el valor del filtro que se eligio
  const [searchedCharacters, setSearchedCharacters] = useState([]); //recibe el valor del input para luego mostrar los resultados que coinciden

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character/?"; //guardamos el url base que vamos a estar afectando

    const fetchData = async () => {
      if (filteredCharacters || pagination || searchedCharacters) { //si se ejecuto algun tipo de filtracion / paginacion / o busqueda x nombre
        if (filteredCharacters) { //si fue filtro lo que se aplico
          url += `status=${filteredCharacters}&`; //mostrame solos los que cumplan con el filtro += es para que se vaya sumando a lo demas
        }
        if (pagination) { //si fue paginacion lo que se aplico
          url += `page=${pagination}&`; //mostrame la pagina correspondiente += es para que se vaya sumando a lo demas
        }
        if (searchedCharacters.length > 0) {//si fue una busqueda x nombre lo que se aplico //*no puedo verificar si simplemente existe searchedCharacters porque siempre me va devolver true, por lo que debo decirle que si es mayor de 0 entonces se ejecute (entendiendo que si es mayor de 0 es porque ya hay caracteres cargados)
          url += `name=${searchedCharacters}&` //mostrame los nombres que coinciden += es para que se vaya sumando a lo demas
        }
      }

      try {
        const { data } = await axios.get(url); //traemos con axios la data que haya en el url creado
        setCharacters(data.results); //cargamos todos los personajes que haya en data a setCharacters para luego ser manipulados
        setTotalPages(data.info); //cargamos toda la info de la paginacion que hay en data para luego poder mostrar esa info 
      } catch (error) { //en caso de que haya un error
        console.error("Error fetching data:", error); //ejecutame esto
      }
    };

    fetchData(); //ejecutamos la funcion que trae la informacion correspondiente
  }, [pagination, filteredCharacters, searchedCharacters]); //y que esto se ejecute cada vez que paginacion o filtracion o busqueda sea cambiada (la primer vuelta va a hacerse si o si, ya las demas siguientes es que van correspondiente a la dependencia)

  return (
    <>
      <Header
        setSearchedCharacters={setSearchedCharacters} //le pasamos la caja que se ocupa de actualizar/guardar la info ingresada en el input
        characters={characters} //le pasamos todos los personajes cargados en la api
        setFilteredCharacters={setFilteredCharacters} //le pasamos la caja que se ocupa de actualizar/guardar cual filtro se selecciono
      />
      <ContainCard
        characters={characters}//le pasamos todos los personajes dentro de la api
        totalPages={totalPages} //le pasamos la info fija que hay sobre las paginas y cantidades
        setPagination={setPagination} //le pasamos la caja que se ocupa de actualizar/guardar la paginacion elegida x el usuario
      />
    </>
  );
};

export default App;

