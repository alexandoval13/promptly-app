import React from 'react';
import ControlBoard from './ControlBoard';
import SpaceStation from './SpaceStation';

function MainPlanet() {
  return (
    <div className="App">
      <SpaceStation />
      <ControlBoard />
    </div>
  );
}

export default MainPlanet;
