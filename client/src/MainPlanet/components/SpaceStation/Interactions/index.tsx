import React from 'react';
import { Thought } from '../../../types/thought';
import { Time } from '../../../types/time';
import SpaceExploration from './SpaceExploration';
import TimeTravelThoughts from './TimeTravelThoughts';

interface InteractionsProps {
  thought: Thought | null;
  times: Time[] | null;
}

const Interactions = (props: InteractionsProps) => {
  const { thought, times } = props;
  return (
    <div>
      <TimeTravelThoughts thought={thought} />
      <SpaceExploration times={times} />
    </div>
  );
};

export default Interactions;
