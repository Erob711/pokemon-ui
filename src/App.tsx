import { useState, useEffect } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const App = (): JSX.Element => {
  type Pokemon = {
    name: string,
    url: string,
  }

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [squad, setSquad] = useState<Pokemon[]>([]);
  const squadLimit = 6;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 6 }}
      alignItems="center"
      title="wrapper"
      justifyContent="center">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 7, sm: 7, md: 3 }}>
        {/* Only let them squad if over 2 select pokemon */}
        {
          (squad.length >= 2) &&
          <Button style={{
            margin: '3rem',
            border: '2px solid #49A497'
          }}>
            Squad Up!
          </Button>
        }
        {squad.map(
          (data) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card>
                <CardContent style=
                  {{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#DE6D6D'
                  }}>
                  {data.name}
                </CardContent>
                <Button
                  onClick={() => {
                    for (let i = 0; i < pokemon.length; i++) {
                      if (pokemon[i].name === data.name) {
                        return;
                      }
                    }
                    setPokemon([data, ...pokemon]);

                    let filteredSquad: Pokemon[] = [];
                    for (let i = 0; i < squad.length; i++) {
                      if (squad[i].name !== data.name) {
                        filteredSquad.push(squad[i]);
                      }
                    }
                    setSquad(filteredSquad);
                  }}
                >
                  Remove From Squad
                </Button>
              </Card>
            </Grid>
          ))}

        {pokemon.map(
          (data) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card>
                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                  {data.name}
                </CardContent>
                <Button
                  onClick={() => {
                    if (squad.length === squadLimit) {
                      return;
                    }
                    for (let i = 0; i < squad.length; i++) {
                      if (squad[i].name === data.name) {
                        return;
                      }
                    }
                    setSquad([data, ...squad]);

                    let filteredPokemon: Pokemon[] = [];
                    for (let i = 0; i < pokemon.length; i++) {
                      if (pokemon[i].name !== data.name) {
                        filteredPokemon.push(pokemon[i]);
                      }
                    }
                    setPokemon(filteredPokemon);
                  }}
                >
                  Add to Squad
                </Button>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
