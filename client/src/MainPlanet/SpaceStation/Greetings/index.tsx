import React from 'react';
import { formatGreeting } from '../../helpers/spacetime';

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
