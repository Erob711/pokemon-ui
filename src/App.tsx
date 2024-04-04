import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const App = (): JSX.Element => {
  type Pokemon = {
    name: string,
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
    <Box sx={{ flexGrow: 6 }}
      alignItems="center"
      justifyContent="center">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 7, sm: 7, md: 3 }}>
        {pokemon.map(
          (data) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card>
                <CardContent style={{ display:'flex', justifyContent:'center' }}>
                  {data.name}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
