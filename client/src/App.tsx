import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainPlanet from './MainPlanet';
import { Alien } from './MainPlanet/types/alien';

import { Grid } from './design-system';

function App() {
  const [alien, setAlien] = useState<Alien | null>(null);

  //* dev purposes only
  const tempID = 1;

  useEffect(() => {
    //* dev purposes only
    axios.get(`/alien/${tempID}`).then((res) => {
      const { data } = res.data;
      setAlien(data);
    });
  }, []);

  if (alien && typeof alien !== 'undefined') {
    return (
      <Grid className="App">
        <MainPlanet alien={alien} />
      </Grid>
    );
  } else {
    return (
      <Grid>
        <header>Awaiting takeoff</header>
      </Grid>
    );
  }
}

export default App;
