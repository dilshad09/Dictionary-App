
import './App.css';
import Button from './components/button/Button';
import axios from 'axios'
import { useEffect } from 'react';
function App() {

  const dictionaryApi = async()=>{
    const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/love")
    console.log(data)
  }
  useEffect(()=>{
    dictionaryApi()
  },[])
  return (
    <div className="App">
     <Button/>
    </div>
  );
}

export default App;
