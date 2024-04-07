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
  

  return (
    <>
    <Header />
    <ContainCard characters={characters} totalPages={totalPages} pagination={setPagination}/>
    <Footer />
    </>
  )
}

export default App
