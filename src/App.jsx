import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header'
import ContainCard from './components/ContainCard'
import Footer from './components/Footer'

const App = () => {

  const [characters, setCharacters] = useState([]) //guarda un array de obj con los primeros 20 personajes y toda su info 
  const [totalPages, setTotalPages] = useState([]) //guarda un arr de obj q siempre es el mismo sobre cuantas hojas totales tiene la api 
  const [pagination, setPagination] = useState() //guarda solo un numero para luego reutilizarlo de quererlo
  const [filteredCharacters, setFilteredCharacters] = useState() //guarda solo el valor del filtro que se eligio

  const [searchedCharacters, setSearchedCharacters] = useState([]) //recibe el valor del input para luego mostrar los resultados que coinciden


  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character/";
    const fetchData = async () => {
  
      if (filteredCharacters) {//FUNCIONA
        url = `https://rickandmortyapi.com/api/character/?status=${filteredCharacters}`
      } else if (pagination) { 
        url = `https://rickandmortyapi.com/api/character/?page=${pagination}`
      } else if (searchedCharacters) {
        url = `https://rickandmortyapi.com/api/character/?name=${searchedCharacters}`
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
    <Header setSearchedCharacters={setSearchedCharacters} characters={characters} setFilteredCharacters={setFilteredCharacters}/>
    <ContainCard characters={characters} totalPages={totalPages} setPagination={setPagination}/>
    <Footer />
    </>
  )
}

export default App

//*ASK PORQUE SE ME ROMPE CUANDO HAGO LA BUSQUEDA X NOMBRE (EN ALGUN MOMENTO FUNCIONO PERO HACIENDO QUE SE RENDERISEN LOS FILTROS SE HIZO LA ROMPIZION) // PORQUE CUANDO SE APLICA EL FILTRO, MUESTRA UNA PAGINACION CORRECTA PERO SI SE QUIERE USAR NO FUNCIONA?
