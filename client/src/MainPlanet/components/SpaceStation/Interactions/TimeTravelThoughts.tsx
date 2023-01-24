import React from 'react';
import { Thought } from '../../../types/thought';

interface TimeTravelThoughtsProps {
  thought: Thought | null;
}

const TimeTravelThoughts = (props: TimeTravelThoughtsProps) => {
  const { thought } = props;

  return (
    <div>
      <header>TimeTravelThoughts</header>
      {thought && <p>{thought.thought}</p>}
    </div>
  );
};

export default TimeTravelThoughts;
