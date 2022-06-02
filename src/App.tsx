import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import PopulationStats from './components/PopulationStats';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,currencies,flag,lang,population")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <Header text="Countries Data"/>
      <CountriesList data={{items, isLoaded, error}}/>
      <Header text="Countries Population Graph"/>
      <PopulationStats items={items}/>
    </div>
  );
}

export default App;
