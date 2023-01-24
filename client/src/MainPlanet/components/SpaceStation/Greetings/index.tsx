import React from 'react';
import { formatGreeting } from '../../../helpers/spacetime-helpers';

interface GreetingsProps {
  name: String;
}

const Greetings = (props: GreetingsProps) => {
  const { name } = props;

  const greeting = formatGreeting(name);

  return (
    <div>
      <header>{greeting}</header>
    </div>
  );
};

export default Greetings;
