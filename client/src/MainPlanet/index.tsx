import React from 'react';
import ControlBoard from './components/ControlBoard';
import SpaceStation from './components/SpaceStation';
import { Alien } from './types/alien';

interface MainPlanetProps {
  alien: Alien;
}

function MainPlanet(props: MainPlanetProps) {
  const { alien } = props;

  return (
    <div className="App">
      <SpaceStation alien={alien} />
      <ControlBoard alien={alien} />
    </div>
  );
}

export default MainPlanet;
