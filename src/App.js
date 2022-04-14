
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState("")
  const [category, setCategory] = useState("en")
  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async()=>{
  try {
    const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
    setMeanings(data)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(()=>{
    dictionaryApi()
    console.log(meanings)
  },[word, category])
  
  return (
    <div className="App">
      <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
     <Container maxWidth="md"></Container>
    </div>
  );
}

export default App;
