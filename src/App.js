import Options from './components/Options'
import Table from'./components/Table'
import {useEffect} from 'react'
import './App.css'
import { useState } from 'react';
function App() {
  const [pageUrl, setPageUrl] = useState('users')
  const [items, setItems] = useState([])
  const API_URL = 'https://jsonplaceholder.typicode.com'
  useEffect(()=>{
    const fetchData = async () =>{
      try{
      const response = await fetch(`${API_URL}/${pageUrl}`)
      if(!response.ok){
        throw Error('Could not load data')
      }
      const data = await response.json()
      setItems(data)
    }catch(err){
       console.log(err.message)
    }
  }
  (async()=> await fetchData())()
  },[pageUrl])
    return (
    <div className='App'>
    <Options pageUrl={pageUrl} setPageUrl={setPageUrl}/>
    <Table items={items}/>
    </div>
  );
}

export default App;
