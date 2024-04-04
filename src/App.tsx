import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const App = (): JSX.Element => {
  type Pokemon = {
    name:string,
    url: string,
  }

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  console.log(pokemon[0]);
  return (
    <div className="App">
      {pokemon.map(
          (data) => (
              <div>
                {data.name.toString()}
                {data.url.toString()}
              </div>
          ))}
    </div>
  );
}

export default App;
