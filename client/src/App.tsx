import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainPlanet from './MainPlanet';
import { Alien } from './MainPlanet/types/alien';

function App() {
  const [alien, setAlien] = useState<Alien | null>(null);

  //* dev purposes only
  const tempID = 1;

  useEffect(() => {
    //* dev purposes only
    axios.get(`/api/alien/${tempID}`).then((res) => {
      const { data } = res.data;
      setAlien(data);
    });
  }, []);

  if (alien && typeof alien !== 'undefined') {
    return (
      <div className="App">
        <MainPlanet alien={alien} />
      </div>
    );
  } else {
    return (
      <div>
        <header>Awaiting takeoff</header>
      </div>
    );
  }
}

export default App;
