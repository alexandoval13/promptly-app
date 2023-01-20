import React from 'react';
import axios from 'axios';
import MainPlanet from './MainPlanet';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('/api').then((res) => {
      const { message } = res.data;
      setData(message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'Loading...' : data}</p>
      </header>
      <MainPlanet />
    </div>
  );
}

export default App;
