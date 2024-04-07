import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header'
import ContainCard from './components/ContainCard'
import Footer from './components/Footer'

function App() {

  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState([])
  const [pagination, setPagination] = useState("https://rickandmortyapi.com/api/character/")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(pagination);
        setCharacters(data.results);
        setTotalPages(data.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(pagination); //aca me trae la paginacion correcta. Porque no se me actualiza dentro del useEffect?! O.O

  return (
    <>
    <Header />
    <ContainCard characters={characters} totalPages={totalPages} setPagination={setPagination}/>
    <Footer />
    </>
  )
}

export default App
