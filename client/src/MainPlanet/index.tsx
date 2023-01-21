import React from 'react';
import ControlBoard from './ControlBoard';
import SpaceStation from './SpaceStation';
import { Alien } from './types/alien';

interface MainPlanetProps {
  alien: Alien;
}

function MainPlanet(props: MainPlanetProps) {
  const { alien } = props;
  console.log({ alien, name: alien.first_name });
  return (
    <div className="App">
      <SpaceStation alien={alien} />
      <ControlBoard alien={alien} />
    </div>
  );
}

export default MainPlanet;
