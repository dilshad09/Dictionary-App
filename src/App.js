
import './App.css';
import Button from './components/button/Button';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
function App() {
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("en")
  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async()=>{
  const {data} = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/love")
    setMeanings(data)
  }
  useEffect(()=>{
    dictionaryApi()
  },[])
  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
     <Container maxWidth="md"></Container>
    </div>
  );
}

export default App;
