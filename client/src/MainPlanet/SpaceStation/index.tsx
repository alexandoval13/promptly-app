import React from 'react';
import { Alien } from '../types/alien';
import Greetings from './Greetings';
import Interactions from './Interactions';

interface SpaceStationProps {
  alien: Alien;
}

const SpaceStation = (props: SpaceStationProps) => {
  const { alien } = props;
  console.log({ alien });
  return (
    <div>
      <div> Space Station</div>
      <Greetings name={alien['first_name']} />
      <Interactions />
    </div>
  );
};

export default SpaceStation;
