import React from 'react';
import { Thought } from '../../../types/thought';

import { Button } from '../../../../design-system';
import { FormTypes } from '../../../constants/forms';

interface TimeTravelThoughtsProps {
  thought: Thought | null;
  handleOpenForm: (name: FormTypes) => void;
}

const TimeTravelThoughts = (props: TimeTravelThoughtsProps) => {
  const { thought, handleOpenForm } = props;

  const handleClick = () => {
    handleOpenForm(FormTypes.THOUGHT);
  };

  return (
    <div>
      <header>TimeTravelThoughts</header>
      {thought && <p>{thought.thought}</p>}
    </div>
  );
};

export default TimeTravelThoughts;
