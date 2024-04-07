import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";

const App = () => {
  const [characters, setCharacters] = useState([]); //guarda un array de obj con los primeros 20 personajes y toda su info
  const [totalPages, setTotalPages] = useState([]); //guarda un arr de obj q siempre es el mismo sobre cuantas hojas totales tiene la api
  const [pagination, setPagination] = useState(); //guarda solo un numero para luego reutilizarlo de quererlo
  const [filteredCharacters, setFilteredCharacters] = useState(); //guarda solo el valor del filtro que se eligio

  const [searchedCharacters, setSearchedCharacters] = useState([]); //recibe el valor del input para luego mostrar los resultados que coinciden

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character/?";

    const fetchData = async () => {
      if (filteredCharacters || pagination || searchedCharacters) {
        //si se ha seleccionado algo
        if (filteredCharacters) {
          //si lo que se selecciono es algun filtro
          url += `status=${filteredCharacters}&`; //mostrame solos los que cumplan con el filtro
          console.log("entre en filtered character", searchedCharacters);
        }
        if (pagination) {
          //si lo que se selecciono fue la pagina
          url += `page=${pagination}&`; //mostrame la pagina correspondiente
          console.log("entre en pagination", searchedCharacters);
        }
        if (searchedCharacters.length > 0) {
          url += `name=${searchedCharacters}&`
        }
        console.log(url);
      }

      try {
        const { data } = await axios.get(url);
        setCharacters(data.results);
        setTotalPages(data.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pagination, filteredCharacters, searchedCharacters]);

  return (
    <>
      <Header
        setSearchedCharacters={setSearchedCharacters}
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
      />
      <ContainCard
        characters={characters}
        totalPages={totalPages}
        setPagination={setPagination}
      />
      <Footer />
    </>
  );
};

export default App;

